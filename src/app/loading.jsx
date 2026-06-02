

const Loading = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center gap-4">
      
      
      <div className="flex items-center justify-center">
        <span className="loading loading-infinity loading-lg text-primary scale-150"></span>
      </div>

      
      <div className="text-center mt-2">
        <h2 className="text-xl font-bold tracking-wide text-base-content/80">
          Summer<span className="text-primary">CART</span>
        </h2>
        <p className="text-xs text-base-content/50 mt-1 tracking-widest uppercase animate-pulse">
          Loading...
        </p>
      </div>

    </div>
  );
};

export default Loading;