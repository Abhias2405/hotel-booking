import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props {
  children: React.ReactNode;
  heroContent?: React.ReactNode;  // Optional hero content prop
}

const Layout = ({ children, heroContent }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-white">
      <Header />
      {/* Optionally render hero content if passed */}
      {heroContent ? (
        <div className="bg-dark-800 py-10">
          {heroContent}
        </div>
      ) : (
        <Hero />
      )}
      <main className="container mx-auto py-10 flex-1 px-4 md:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
