'use client'
import { HiOutlineMail, HiOutlineArrowLeft } from 'react-icons/hi';

const CookiesPage = () => {
    const goBack = () => {
            window.history.back();
        };
        return (
            <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center px-4 overflow-hidden relative">
    
                {/*animation*/}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
    
                {/* card */}
                <div className="max-w-xl w-full text-center backdrop-blur-lg bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl z-10 relative">
    
                    {/* icons */}
                    <div className="inline-flex justify-center items-center bg-linear-to-r from-amber-500 to-orange-600 p-4 rounded-2xl shadow-lg shadow-orange-500/25 mb-6 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    </div>
    
                    {/* main heading */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-400 to-cyan-400 mb-4 tracking-tight">
                        Under Construction
                    </h1>
    
                    <p className="text-slate-300 text-base md:text-lg mb-8 max-w-md mx-auto leading-relaxed">
                        We are working hard to bring you something amazing! This page is currently undergoing maintenance and will be live soon.
                    </p>
    
                    {/* progress bar(DaisyUI) */}
                    <div className="w-full max-w-md mx-auto mb-10">
                        <div className="flex justify-between text-xs text-slate-400 mb-2 px-1">
                            <span>Development Progress</span>
                            <span className="font-bold text-secondary">75%</span>
                        </div>
                        {/* DaisyUI progress bar */}
                        <progress className="progress progress-secondary w-full h-3 shadow-inner bg-slate-800" value="75" max="100"></progress>
                    </div>
    
                    {/* notifications */}
                    <div className="max-w-md mx-auto bg-slate-950/40 p-2 rounded-2xl border border-white/5 flex items-center mb-8 gap-2">
                        <div className="pl-3 text-slate-400 hidden sm:block">
                            <HiOutlineMail className="text-xl" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email for updates"
                            className="input input-ghost w-full bg-transparent text-white placeholder-slate-500 border-none focus:outline-none focus:bg-transparent text-sm"
                        />
                        <button className="btn btn-primary bg-linear-to-r from-purple-600 to-pink-600 border-none text-white rounded-xl text-xs px-4 h-10 min-h-0">
                            Notify Me
                        </button>
                    </div>
    
                    {/* back button */}
                    <button
                        onClick={goBack}
                        className="btn btn-ghost text-slate-400 hover:text-white gap-2 text-sm transition-colors duration-200"
                    >
                        <HiOutlineArrowLeft />
                        Go Back to Previous Page
                    </button>
    
                </div>
            </div>
        );
};

export default CookiesPage;