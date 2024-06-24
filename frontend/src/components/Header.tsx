import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <header className="bg-primary shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-0">
        <h1 className="text-2xl sm:text-3xl font-heading font-bold text-secondary">
          <Link
            to="/"
            className="hover:text-accent transition duration-300"
          >
            Roomify
          </Link>
        </h1>
        <nav className="flex space-x-4 text-sm sm:text-base">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="text-secondary font-body font-medium px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-300"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="text-secondary font-body font-medium px-4 py-2 rounded-lg hover:bg-accent hover:text-white transition duration-300"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="bg-accent text-white font-body font-medium px-4 py-2 rounded-lg shadow-md hover:bg-hover transition duration-300"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
