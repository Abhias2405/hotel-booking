import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { BiMap } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const LatestDestinationCard = ({ hotel }: Props) => {
  return (
    <Link
      to={`/detail/${hotel._id}`}
      className="block group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="font-bold text-accent">£{hotel.pricePerNight}</span>
          <span className="text-gray-600 text-sm">/night</span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-md">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} className="text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors">
            {hotel.name}
          </h3>
          
          <div className="flex items-center text-gray-600">
            <BiMap className="mr-1" />
            <span>{hotel.city}, {hotel.country}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{hotel.type}</span>
            <span>•</span>
            <span>{hotel.adultCount} adults, {hotel.childCount} children</span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default LatestDestinationCard;