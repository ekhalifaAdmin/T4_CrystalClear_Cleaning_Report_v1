import React, { useState, useEffect } from 'react';

interface PhotoUploadProps {
  title: string;
  photo: File | null;
  setPhoto: (file: File | null) => void;
}

const PhotoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const PhotoUpload: React.FC<PhotoUploadProps> = ({ title, photo, setPhoto }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (photo) {
      const url = URL.createObjectURL(photo);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [photo]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-slate-700 mb-2">{title}</h3>
      <div className="aspect-video w-full border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center relative overflow-hidden bg-slate-50">
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <div className="text-center text-slate-500 p-4">
            <PhotoIcon className="mx-auto h-12 w-12"/>
            <p className="mt-2 text-sm">Attach photo</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PhotoUpload;
