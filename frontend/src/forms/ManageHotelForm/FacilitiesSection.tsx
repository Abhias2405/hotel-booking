import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-secondary mb-4">Facilities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {hotelFacilities.map((facility) => (
          <label
            key={facility}
            className="flex items-center gap-2 text-sm font-medium text-secondary"
          >
            <input
              type="checkbox"
              value={facility}
              className="w-4 h-4 text-accent bg-primary-200 border border-secondary-300 rounded focus:ring-2 focus:ring-accent focus:outline-none"
              {...register("facilities", {
                validate: (facilities) =>
                  facilities && facilities.length > 0
                    ? true
                    : "At least one facility is required",
              })}
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-error text-sm font-medium block mt-3">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;
