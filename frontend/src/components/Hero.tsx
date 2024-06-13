const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-primary to-secondary pb-16">
        <div className="container mx-auto flex flex-col items-center text-center gap-4 py-16">
          <h1 className="text-6xl text-white font-extrabold leading-tight drop-shadow-md">
            Find Your Next Stay
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl">
            Discover low prices on hotels for your dream vacation with ease.
          </p>
          <button className="mt-6 px-8 py-4 bg-accent text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            Start Searching
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;