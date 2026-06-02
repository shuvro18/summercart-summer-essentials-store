'use client'

import Link from 'next/link';

import { HiOutlineHome, HiOutlineArrowLeft } from 'react-icons/hi';

const NotFound = () => {
  // Function to navigate back to the previous page
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Glowing background ambient circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Container with Glassmorphism Effect */}
      <div className="max-w-md w-full text-center backdrop-blur-md bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl z-10">
        
        {/* Large 404 Text with DaisyUI Badge */}
        <div className="relative inline-block">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 animate-bounce">
            404
          </h1>
          <div className="badge badge-secondary absolute -bottom-2 right-2 shadow-lg uppercase font-bold tracking-wider">
            Oops!
          </div>
        </div>

        {/* Text Content in English */}
        <h2 className="text-2xl font-bold text-white mt-6 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Go Back Button */}
          <button 
            onClick={goBack}
            className="btn btn-outline btn-info w-full sm:w-auto rounded-xl gap-2 transition-all duration-300 hover:scale-105"
          >
            <HiOutlineArrowLeft className="text-lg" />
            Go Back
          </button>

          {/* Back to Home Button */}
          <Link 
            href="/" 
            className="btn btn-primary bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none w-full sm:w-auto rounded-xl gap-2 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
          >
            <HiOutlineHome className="text-lg" />
            Back to Home
          </Link>

        </div>

      </div>
    </div>
  );
};

export default NotFound;