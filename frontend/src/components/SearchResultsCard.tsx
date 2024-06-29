// SearchResultsCard.tsx
import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-secondary-300 rounded-lg p-6 gap-6 bg-white shadow-lg">
      <div className="w-full h-[300px] rounded-lg overflow-hidden">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-rows-[1fr_2fr_1fr] gap-4">
        <div>
          <div className="flex items-center mb-2">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-accent" />
              ))}
            </span>
            <span className="ml-2 text-sm text-secondary">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold text-secondary hover:underline"
          >
            {hotel.name}
          </Link>
        </div>

        <div>
          <p className="text-secondary line-clamp-4 text-sm">
            {hotel.description}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-center">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-secondary-100 text-secondary p-2 rounded-lg font-medium text-xs"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-sm text-secondary">
                +{hotel.facilities.length - 3} more
              </span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className="font-bold text-lg text-secondary">
              £{hotel.pricePerNight} per night
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-accent hover:bg-hover text-white py-2 px-4 font-bold text-sm rounded-lg hover:bg-accent-light"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;