import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <div className="text-center text-gray-500">No Hotels found</div>;
  }

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-accent hover:bg-hover text-white px-4 py-2 rounded-lg "
        >
          Add Hotel
        </Link>
      </header>
      <section className="grid grid-cols-1 gap-6">
        {hotelData.map((hotel) => (
          <div
            key={hotel._id}
            className="bg-white rounded-lg shadow-lg p-6 space-y-4"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.description}</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <BsMap />
                <span>{hotel.city}, {hotel.country}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <BsBuilding />
                <span>{hotel.type}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <BiMoney />
                <span>£{hotel.pricePerNight} per night</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <BiHotel />
                <span>{hotel.adultCount} adults, {hotel.childCount} children</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                <BiStar />
                <span>{hotel.starRating} Stars</span>
              </div>
            </div>
            <div className="text-right">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="bg-accent hover:bg-hover text-white px-4 py-2 rounded-lg "
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MyHotels;
