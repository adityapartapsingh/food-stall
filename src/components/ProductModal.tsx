import React from 'react';
import { MenuItem } from '../types';
import { X, Leaf } from 'lucide-react';

interface ProductModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function ProductModal({ item, onClose }: ProductModalProps) {
  const getDoshaColor = (dosha?: string) => {
    switch (dosha) {
      case 'vata': return 'text-purple-600 bg-purple-50';
      case 'pitta': return 'text-red-600 bg-red-50';
      case 'kapha': return 'text-green-600 bg-green-50';
      case 'tridoshic': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 sm:h-96">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
            {item.dosha && (
              <span className={`px-3 py-1 rounded-full flex items-center gap-1 ${getDoshaColor(item.dosha)}`}>
                <Leaf className="w-5 h-5" />
                <span className="capitalize">{item.dosha}</span>
              </span>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">{item.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Ayurvedic Benefits</h3>
            <div className="flex flex-wrap gap-2">
              {item.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-50 text-green-700 rounded-full"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}