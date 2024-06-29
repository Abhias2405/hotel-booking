import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  const numberInputClass = "w-16 text-center text-lg font-bold text-secondary focus:outline-none [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto p-6"
    >
      <div className="bg-primary-100 rounded-lg shadow-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4">
          {/* Destination Input */}
          <div className="w-full">
            <div className="flex items-center bg-white p-4 rounded-lg shadow-md border border-secondary-300">
              <MdTravelExplore size={25} className="mr-3 text-accent" />
              <input
                placeholder="Where are you going?"
                className="text-lg w-full focus:outline-none text-secondary"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />
            </div>
          </div>

          {/* Guest Count */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center bg-white p-4 rounded-lg shadow-md border border-secondary-300">
                <span className="text-secondary font-bold mr-2">Adults:</span>
                <input
                  className={numberInputClass}
                  type="number"
                  min={1}
                  max={20}
                  value={adultCount}
                  onChange={(event) => setAdultCount(parseInt(event.target.value))}
                />
              </label>
              <label className="flex items-center bg-white p-4 rounded-lg shadow-md border border-secondary-300">
                <span className="text-secondary font-bold mr-2">Child:</span>
                <input
                  className={numberInputClass}
                  type="number"
                  min={0}
                  max={20}
                  value={childCount}
                  onChange={(event) => setChildCount(parseInt(event.target.value))}
                />
              </label>
              
            </div>
          </div>

          {/* Check-in Date */}
          <div className="w-full">
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date as Date)}
              selectsStart
              startDate={checkIn}
              endDate={checkOut}
              minDate={minDate}
              maxDate={maxDate}
              placeholderText="Check-in Date"
              className="w-full p-4 bg-white rounded-lg shadow-md border border-secondary-300 text-secondary focus:outline-none"
            />
          </div>

          {/* Check-out Date */}
          <div className="w-full">
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date as Date)}
              selectsEnd
              startDate={checkIn}
              endDate={checkOut}
              minDate={checkIn || minDate}
              maxDate={maxDate}
              placeholderText="Check-out Date"
              className="w-full p-4 bg-white rounded-lg shadow-md border border-secondary-300 text-secondary focus:outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="w-full">
            <div className="flex gap-2">
              <button className="flex-grow bg-accent hover:bg-hover text-white p-4 font-bold rounded-lg">
                Search
              </button>
              <button className="w-24 bg-red-600 text-white p-4 font-bold rounded-lg hover:bg-red-500">
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;