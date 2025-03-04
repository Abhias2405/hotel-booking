import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
  heroContent?: React.ReactNode; // Optional hero content prop
}

const Layout = ({ children, heroContent }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-secondary">
      <Header />
      {/* Optionally render hero content if passed */}
      {heroContent ? (
        <div className="bg-secondary-100 py-10 shadow-sm">
          {heroContent}
        </div>
      ) : (
        <Hero />
      )}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SearchBar />
      </div>
      <main className="container mx-auto py-10 flex-1 px-4 md:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
