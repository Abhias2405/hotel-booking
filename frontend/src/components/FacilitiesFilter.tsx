import { hotelFacilities } from "../config/hotel-options-config";

type Props = {
  selectedFacilities: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FacilitiesFilter = ({ selectedFacilities, onChange }: Props) => {
  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h4 className="text-lg font-bold text-secondary mb-4">Facilities</h4>
      <div className="space-y-3">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="flex items-center space-x-3 bg-primary-200 p-3 rounded-lg border border-secondary-300 hover:bg-primary-300"
          >
            <input
              type="checkbox"
              className="rounded text-accent focus:ring-2 focus:ring-accent"
              value={facility}
              checked={selectedFacilities.includes(facility)}
              onChange={onChange}
            />
            <span className="text-secondary font-medium">{facility}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesFilter;