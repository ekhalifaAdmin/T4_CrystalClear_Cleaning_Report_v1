import React from 'react';

interface TextInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({ label, id, as = 'input', ...props }) => {
  const commonClasses = "block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea id={id} className={commonClasses} {...props}></textarea>
      ) : (
        <input id={id} className={commonClasses} {...props} />
      )}
    </div>
  );
};

export default TextInput;
