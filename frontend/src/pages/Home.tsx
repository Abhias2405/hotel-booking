import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-accent to-hover rounded-xl p-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Discover Your Next Stay
          </h1>
          <p className="text-blue-100 text-lg">
            Explore our curated collection of exceptional destinations
          </p>
        </div>
      </div>

      {/* Latest Destinations Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Latest Destinations
          </h2>
          <p className="text-gray-600 text-lg">
            Most recent destinations added by our hosts, handpicked for your next adventure
          </p>
        </div>

        <div className="space-y-6">
          {/* Featured Row - 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {topRowHotels.map((hotel) => (
              <div key={hotel._id} className="transform hover:scale-[1.02] transition-transform duration-300">
                <LatestDestinationCard hotel={hotel} />
              </div>
            ))}
          </div>

          {/* Secondary Row - 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {bottomRowHotels.map((hotel) => (
              <div key={hotel._id} className="transform hover:scale-[1.02] transition-transform duration-300">
                <LatestDestinationCard hotel={hotel} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Browse through our collection of handpicked destinations
          </p>
          <button className="bg-accent hover:bg-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore All Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;