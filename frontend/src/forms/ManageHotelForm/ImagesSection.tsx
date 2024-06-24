import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="bg-primary-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-secondary mb-4">Images</h2>
      <div className="border border-secondary-300 rounded-lg p-4 bg-primary-200">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-secondary bg-primary-200 py-2 px-3 rounded-lg border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;

              if (totalLength === 0) {
                return "At least one image should be added";
              }

              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-error text-sm font-medium">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
