const Footer = () => {
  return (
    <footer className="bg-primary py-10 shadow-inner">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-2xl sm:text-3xl text-white font-heading font-bold tracking-tight">
          MernHolidays.com
        </span>
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <p className="text-secondary font-body cursor-pointer hover:text-accent transition duration-300">
            Privacy Policy
          </p>
          <p className="text-secondary font-body cursor-pointer hover:text-accent transition duration-300">
            Terms of Service
          </p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
