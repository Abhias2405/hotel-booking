const Footer = () => {
    return (
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          <span className="text-2xl font-bold">StaySphere</span>
          <div className="flex gap-6">
            <p className="cursor-pointer hover:text-secondary transition-all">
              Privacy Policy
            </p>
            <p className="cursor-pointer hover:text-secondary transition-all">
              Terms of Service
            </p>
          </div>
          <p className="text-sm opacity-75">&copy; {new Date().getFullYear()} StaySphere. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;