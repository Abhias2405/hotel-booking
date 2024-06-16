import { useForm } from "react-hook-form";

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const { register, watch, handleSubmit, formState: { errors }, } = useForm<RegisterFormData>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
      });

    return (
        <form className="flex flex-col gap-8 p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto" onSubmit={onSubmit}>
            <h2 className="text-4xl font-extrabold text-primary text-center">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-6">
                <label className="flex-1">
                    <span className="text-gray-700 text-sm font-semibold">First Name</span>
                    <input 
                        className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-primary focus:outline-none" 
                        {...register("firstName", { required: "This field is required" })} 
                        placeholder="Enter your first name"
                    />
                    {errors.firstName && (<span className="text-red-500">{errors.firstName.message}</span>)}
                </label>
                <label className="flex-1">
                    <span className="text-gray-700 text-sm font-semibold">Last Name</span>
                    <input 
                        className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-primary focus:outline-none" 
                        {...register("lastName", { required: "This field is required" })} 
                        placeholder="Enter your last name"
                    />
                    {errors.lastName && (<span className="text-red-500">{errors.lastName.message}</span>)}
                </label>
            </div>
            <label className="flex flex-col">
                <span className="text-gray-700 text-sm font-semibold">Email</span>
                <input 
                    type="email" 
                    className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-primary focus:outline-none" 
                    {...register("email", { required: "This field is required" })} 
                    placeholder="Enter your email"
                />
                {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
            </label>
            <label className="flex flex-col">
                <span className="text-gray-700 text-sm font-semibold">Password</span>
                <input
                    type="password"
                    className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-primary focus:outline-none"
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                    placeholder="Enter your password"
                />
                {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}
            </label>
            <label className="flex flex-col">
                <span className="text-gray-700 text-sm font-semibold">Confirm Password</span>
                <input
                    type="password"
                    className="border border-gray-300 rounded-lg w-full py-2 px-3 mt-1 focus:ring-2 focus:ring-primary focus:outline-none"
                    {...register("confirmPassword", {
                        validate: (val) => {
                            if (!val) {
                                return "This field is required";
                            } else if (watch("password") !== val) {
                                return "Your passwords do not match";
                            }
                        },
                    })}
                    placeholder="Confirm your password"
                />
                {errors.confirmPassword && (<span className="text-red-500">{errors.confirmPassword.message}</span>)}
            </label>
            <button
                type="submit"
                className="w-full py-3 bg-primary text-white font-bold text-lg rounded-lg hover:bg-secondary transition-all focus:outline-none focus:ring-2 focus:ring-secondary"
            >
                Create Account
            </button>
        </form>
    );
};

export default Register;
