import { useFormContext } from "react-hook-form";
import { coworkingFacilities } from "../../config/coworking-options-config";
//import { HotelFormData } from "./ManageHotelForm";
import { SedeFormData } from "./ManageCoworkingForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SedeFormData>();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Servicios</h2>
      <div className="grid grid-cols-5 gap-3">
        {coworkingFacilities.map((facility) => (
          <label className="text-sm flex gap-1 text-gray-700">
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};

export default FacilitiesSection;