import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { BsCalendarRange, BsPeople } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

const MyBookings = () => {
  const { data: hotels } = useQuery(
    "fetchMyBookings",
    apiClient.fetchMyBookings
  );

  if (!hotels || hotels.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-50 rounded-lg">
        <div className="text-secondary text-xl font-semibold">No bookings found</div>
        <p className="text-gray-400 mt-2">Your future trips will appear here</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary">My Bookings</h1>
        <span className="text-gray-500">{hotels.length} bookings</span>
      </div>

      <div className="space-y-6">
        {hotels.map((hotel) => (
          <div key={hotel._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6">
              {/* Image Section */}
              <div className="relative h-[300px] lg:h-full">
                <img
                  src={hotel.imageUrls[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 lg:hidden">
                  <h2 className="text-2xl font-bold text-white">{hotel.name}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="hidden lg:block mb-4">
                  <h2 className="text-2xl font-bold text-secondary">{hotel.name}</h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <BiMap className="mr-1" />
                    <span>{hotel.city}, {hotel.country}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {hotel.bookings.map((booking, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center text-secondary">
                          <BsCalendarRange className="mr-2" />
                          <span className="font-medium">
                            {new Date(booking.checkIn).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })} - {new Date(booking.checkOut).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <BsPeople className="mr-2" />
                        <span>
                          {booking.adultCount} adults, {booking.childCount} children
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;