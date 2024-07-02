import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "./../api-client";
import { AiFillStar } from "react-icons/ai";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney } from "react-icons/bi";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";

const Detail = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  if (!hotel) {
    return <></>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col gap-2">
          <span className="flex mb-2">
            {Array.from({ length: hotel.starRating }).map((_, index) => (
              <AiFillStar key={index} className="text-yellow-400 text-2xl" />
            ))}
          </span>
          <h1 className="text-4xl font-bold text-gray-800">{hotel.name}</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <BsMap className="text-lg" />
            <span>{hotel.city}, {hotel.country}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotel.imageUrls.map((image, index) => (
          <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`${hotel.name} - Image ${index + 1}`}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <BsBuilding className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-gray-500">Property Type</p>
            <p className="font-semibold">{hotel.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <BiMoney className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-gray-500">Price Per Night</p>
            <p className="font-semibold">£{hotel.pricePerNight}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <BiHotel className="text-2xl text-accent" />
          <div>
            <p className="text-sm text-gray-500">Capacity</p>
            <p className="font-semibold">{hotel.adultCount} adults, {hotel.childCount} children</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md">
          <AiFillStar className="text-2xl text-yellow-400" />
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-semibold">{hotel.starRating} Stars</p>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {hotel.facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors"
            >
              {facility}
            </div>
          ))}
        </div>
      </div>

      {/* Description and Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <div className="prose max-w-none whitespace-pre-line text-gray-600">
            {hotel.description}
          </div>
        </div>
        <div>
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;