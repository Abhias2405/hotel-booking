import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          <span className="text-3xl text-primary font-bold">
            <Link to="/">StaySphere</Link>
          </span>
          <div className="flex space-x-4">
            <Link
              to="/sign-in"
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>
    );
  };

export default Header;