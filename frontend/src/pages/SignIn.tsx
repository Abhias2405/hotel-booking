import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
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
      className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
      <label className="block">
        <span className="block text-sm font-semibold mb-1">Email</span>
        <input
          type="email"
          className="w-full border border-gray-600 rounded-lg py-2 px-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
          className="w-full border border-gray-600 rounded-lg py-2 px-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </label>
      <div className="flex items-center justify-between mt-6">
        <span className="text-sm">
          Not Registered?{" "}
          <Link className="underline text-blue-400 hover:text-blue-300" to="/register">
            Create an account
          </Link>
        </span>
        <button
          type="submit"
          className=" bg-accent  hover:bg-hover text-white py-2 px-4 rounded-lg font-bold text-lg transition duration-300"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SignIn;
