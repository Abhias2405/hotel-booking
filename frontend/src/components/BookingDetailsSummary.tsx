import { HotelType } from "../../../backend/src/shared/types";
import { BsCalendarCheck, BsCalendarX, BsClock, BsPeople, BsGeoAlt } from "react-icons/bs";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  numberOfNights: number;
  hotel: HotelType;
};

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Your Booking Details</h2>
        <div className="bg-accent text-white px-3 py-1 rounded-full text-sm">
          {numberOfNights} nights
        </div>
      </div>

      <div className="space-y-4">
        {/* Location */}
        <div className="flex items-start gap-3">
          <BsGeoAlt className="text-accent text-xl mt-1" />
          <div>
            <p className="text-gray-600">Location</p>
            <p className="font-semibold text-gray-800">
              {hotel.name}
            </p>
            <p className="text-sm text-gray-600">
              {hotel.city}, {hotel.country}
            </p>
          </div>
        </div>

        {/* Check-in/Check-out */}
        <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <BsCalendarCheck className="text-accent text-xl mt-1" />
            <div>
              <p className="text-gray-600">Check-in</p>
              <p className="font-semibold text-gray-800">
                {checkIn.toDateString()}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BsCalendarX className="text-accent text-xl mt-1" />
            <div>
              <p className="text-gray-600">Check-out</p>
              <p className="font-semibold text-gray-800">
                {checkOut.toDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
          <BsClock className="text-accent text-xl" />
          <div>
            <p className="text-gray-600">Duration</p>
            <p className="font-semibold text-gray-800">
              {numberOfNights} night{numberOfNights > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
          <BsPeople className="text-accent text-xl" />
          <div>
            <p className="text-gray-600">Guests</p>
            <p className="font-semibold text-gray-800">
              {adultCount} adult{adultCount > 1 ? 's' : ''} 
              {childCount > 0 && ` & ${childCount} child${childCount > 1 ? 'ren' : ''}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsSummary;