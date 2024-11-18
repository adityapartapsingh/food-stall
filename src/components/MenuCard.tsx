import React from 'react';
import { MenuItem } from '../types';
import { Leaf } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export default function MenuCard({ item, onClick }: MenuCardProps) {
  const getDoshaColor = (dosha?: string) => {
    switch (dosha) {
      case 'vata': return 'text-purple-600';
      case 'pitta': return 'text-red-600';
      case 'kapha': return 'text-green-600';
      case 'tridoshic': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {item.dosha && (
          <div className={`absolute bottom-0 left-0 bg-white px-3 py-1 m-2 rounded-full shadow-md flex items-center gap-1 ${getDoshaColor(item.dosha)}`}>
            <Leaf className="w-4 h-4" />
            <span className="text-sm capitalize">{item.dosha}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.benefits.slice(0, 2).map((benefit, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full"
            >
              {benefit}
            </span>
          ))}
          {item.benefits.length > 2 && (
            <span className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full">
              +{item.benefits.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}