import React from 'react';
import Section from './Section';
import { Material } from '../types';

interface MaterialsUsedProps {
  materials: Material[];
  setMaterials: React.Dispatch<React.SetStateAction<Material[]>>;
}

const TrashIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);


const MaterialsUsed: React.FC<MaterialsUsedProps> = ({ materials, setMaterials }) => {
  const handleAddMaterial = () => {
    setMaterials([...materials, { id: Date.now(), item: '', quantity: '' }]);
  };

  const handleRemoveMaterial = (id: number) => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  const handleMaterialChange = (id: number, field: 'item' | 'quantity', value: string) => {
    setMaterials(
      materials.map((material) =>
        material.id === id ? { ...material, [field]: value } : material
      )
    );
  };
  
  const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-teal-400";


  return (
    <Section title="Materials Used / Quantity">
      <div className="space-y-3">
        {/* Header */}
        <div className="grid grid-cols-[1fr_auto_40px] gap-3 font-semibold text-sm text-slate-600 px-1">
            <span>Item</span>
            <span>Qty</span>
            <span className="sr-only">Actions</span>
        </div>

        {materials.map((material) => (
          <div key={material.id} className="grid grid-cols-[1fr_auto_40px] items-center gap-3">
            <input
              type="text"
              value={material.item}
              onChange={(e) => handleMaterialChange(material.id, 'item', e.target.value)}
              placeholder="e.g., All-purpose cleaner"
              className={inputClasses}
            />
            <input
              type="text"
              value={material.quantity}
              onChange={(e) => handleMaterialChange(material.id, 'quantity', e.target.value)}
              placeholder="e.g., 500ml"
              className={`${inputClasses} w-28`}
            />
            <button
              type="button"
              onClick={() => handleRemoveMaterial(material.id)}
              className="flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:bg-red-100 hover:text-red-500 transition-colors"
            >
                <TrashIcon />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleAddMaterial}
          className="flex items-center space-x-2 text-sm font-medium text-teal-600 hover:text-teal-800 transition-colors"
        >
          <PlusIcon/>
          <span>Add Material</span>
        </button>
      </div>
    </Section>
  );
};

export default MaterialsUsed;
