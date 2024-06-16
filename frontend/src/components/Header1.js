import React from 'react';
import img from '../Resources/img.jpg';

const Header1 = () => {
  return (
    <div className="flex flex-row items-center gap-4 bg-blue-500 text-white shadow-md w-full">
      <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src={img} alt="Logo" />
        <span className="ml-3 text-xl font-semibold text-gray-100">Gram Urjha</span>
      </div>
    </div>
  );
}

export default Header1;