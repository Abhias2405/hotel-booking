import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <form
  className="max-w-lg mx-auto p-6 bg-primary text-secondary rounded-lg shadow-lg"
  onSubmit={onSubmit}
>
  <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
  <div className="flex flex-col md:flex-row gap-4">
    <label className="flex-1">
      <span className="block text-sm font-semibold mb-1">First Name</span>
      <input
        className="w-full border border-dark-800 rounded-lg py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
        {...register("firstName", { required: "This field is required" })}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
      )}
    </label>
    <label className="flex-1">
      <span className="block text-sm font-semibold mb-1">Last Name</span>
      <input
        className="w-full border border-dark-800 rounded-lg py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
        {...register("lastName", { required: "This field is required" })}
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
      )}
    </label>
  </div>
  <label className="block mt-4">
    <span className="block text-sm font-semibold mb-1">Email</span>
    <input
      type="email"
      className="w-full border border-dark-800 rounded-lg py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
      {...register("email", { required: "This field is required" })}
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
    )}
  </label>
  <label className="block mt-4">
    <span className="block text-sm font-semibold mb-1">Password</span>
    <input
      type="password"
      className="w-full border border-dark-800 rounded-lg py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
      {...register("password", {
        required: "This field is required",
        minLength: { value: 6, message: "Password must be at least 6 characters" },
      })}
    />
    {errors.password && (
      <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
    )}
  </label>
  <label className="block mt-4">
    <span className="block text-sm font-semibold mb-1">Confirm Password</span>
    <input
      type="password"
      className="w-full border border-dark-800 rounded-lg py-2 px-3 text-secondary focus:ring-2 focus:ring-accent focus:outline-none"
      {...register("confirmPassword", {
        validate: (val) =>
          !val
            ? "This field is required"
            : watch("password") !== val
            ? "Your passwords do not match"
            : undefined,
      })}
    />
    {errors.confirmPassword && (
      <p className="text-red-500 text-sm mt-1">
        {errors.confirmPassword.message}
      </p>
    )}
  </label>
  <button
    type="submit"
    className="w-full mt-6 py-2 bg-accent hover:bg-hover rounded-lg font-bold text-xl text-white transition duration-300"
  >
    Create Account
  </button>
</form>

  );
};

export default Register;
