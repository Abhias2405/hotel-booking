import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-secondary mb-4">Guests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2 text-sm font-medium text-secondary">
          Adults
          <input
            className="w-full py-2 px-3 bg-primary-200 text-secondary border border-secondary-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            type="number"
            min={1}
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
          {errors.adultCount?.message && (
            <span className="text-error text-sm font-medium">
              {errors.adultCount.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-secondary">
          Children
          <input
            className="w-full py-2 px-3 bg-primary-200 text-secondary border border-secondary-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            type="number"
            min={0}
            {...register("childCount", {
              required: "This field is required",
            })}
          />
          {errors.childCount?.message && (
            <span className="text-error text-sm font-medium">
              {errors.childCount.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default GuestsSection;
