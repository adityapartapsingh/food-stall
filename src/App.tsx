import React, { useState } from 'react';
import { menuItems } from './data/menuItems';
import MenuCard from './components/MenuCard';
import ProductModal from './components/ProductModal';
import { Leaf, Flower2 } from 'lucide-react';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-3">
              <Flower2 className="w-10 h-10 text-green-600" />
              <h1 className="text-4xl font-bold text-gray-900">Dhanvantari Veda Blooms</h1>
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrate National Ayurveda Day 2024 with our wellness-inspired treats! 
              Experience the ancient wisdom of Ayurveda through our carefully crafted dishes. 🌿
            </p>
          </div>
        </div>
      </header>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onClick={setSelectedItem}
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedItem && (
        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default App;