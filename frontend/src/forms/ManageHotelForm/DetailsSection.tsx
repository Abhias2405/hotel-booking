import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-6 bg-primary-100 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-secondary mb-4">Add Hotel</h1>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-secondary">Name</span>
        <input
          type="text"
          className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-error text-sm">{errors.name.message}</span>
        )}
      </label>

      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex flex-col gap-2 flex-1">
          <span className="text-sm font-medium text-secondary">City</span>
          <input
            type="text"
            className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-error text-sm">{errors.city.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-2 flex-1">
          <span className="text-sm font-medium text-secondary">Country</span>
          <input
            type="text"
            className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-error text-sm">{errors.country.message}</span>
          )}
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-secondary">Description</span>
        <textarea
          rows={5}
          className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-error text-sm">{errors.description.message}</span>
        )}
      </label>

      <div className="flex flex-col md:flex-row gap-4">
        <label className="flex flex-col gap-2 flex-1">
          <span className="text-sm font-medium text-secondary">Price Per Night</span>
          <input
            type="number"
            min={1}
            className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
            {...register("pricePerNight", { required: "This field is required" })}
          />
          {errors.pricePerNight && (
            <span className="text-error text-sm">
              {errors.pricePerNight.message}
            </span>
          )}
        </label>
        <label className="flex flex-col gap-2 flex-1">
          <span className="text-sm font-medium text-secondary">Star Rating</span>
          <select
            {...register("starRating", { required: "This field is required" })}
            className="border border-secondary-300 rounded-lg w-full py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
          >
            <option value="" disabled>
              Select Rating
            </option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-error text-sm">
              {errors.starRating.message}
            </span>
          )}
        </label>
      </div>
    </div>
  );
};

export default DetailsSection;
