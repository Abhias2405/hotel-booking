import { hotelTypes } from "../config/hotel-options-config";

type Props = {
  selectedHotelTypes: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-lg font-bold text-secondary mb-4">Hotel Type</h4>
      <div className="space-y-3">
        {hotelTypes.map((hotelType) => (
          <label
            key={hotelType}
            className="flex items-center space-x-3 bg-primary-200 p-3 rounded-lg border border-secondary-300 hover:bg-primary-300"
          >
            <input
              type="checkbox"
              className="rounded text-accent focus:ring-2 focus:ring-accent"
              value={hotelType}
              checked={selectedHotelTypes.includes(hotelType)}
              onChange={onChange}
            />
            <span className="text-secondary font-medium">{hotelType}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default HotelTypesFilter;
