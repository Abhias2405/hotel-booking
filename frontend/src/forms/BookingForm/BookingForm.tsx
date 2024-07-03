import { useForm } from "react-hook-form";
import {
  PaymentIntentResponse,
  UserType,
} from "../../../../backend/src/shared/types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useSearchContext } from "../../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import { BsPerson, BsEnvelope, BsCreditCard, BsCash } from "react-icons/bs";

type Props = {
  currentUser: UserType;
  paymentIntent: PaymentIntentResponse;
};

export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  adultCount: number;
  childCount: number;
  checkIn: string;
  checkOut: string;
  hotelId: string;
  paymentIntentId: string;
  totalCost: number;
};

const BookingForm = ({ currentUser, paymentIntent }: Props) => {
  const stripe = useStripe();
  const elements = useElements();

  const search = useSearchContext();
  const { hotelId } = useParams();

  const { showToast } = useAppContext();

  const { mutate: bookRoom, isLoading } = useMutation(
    apiClient.createRoomBooking,
    {
      onSuccess: () => {
        showToast({ message: "Booking Saved!", type: "SUCCESS" });
      },
      onError: () => {
        showToast({ message: "Error saving booking", type: "ERROR" });
      },
    }
  );

  const { handleSubmit, register } = useForm<BookingFormData>({
    defaultValues: {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      adultCount: search.adultCount,
      childCount: search.childCount,
      checkIn: search.checkIn.toISOString(),
      checkOut: search.checkOut.toISOString(),
      hotelId: hotelId,
      totalCost: paymentIntent.totalCost,
      paymentIntentId: paymentIntent.paymentIntentId,
    },
  });

  const onSubmit = async (formData: BookingFormData) => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
      },
    });

    if (result.paymentIntent?.status === "succeeded") {
      bookRoom({ ...formData, paymentIntentId: result.paymentIntent.id });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Confirm Your Details</h1>
        <p className="text-gray-600 mt-1">Please review your booking information</p>
      </div>

      {/* Personal Details Section */}
      <div className="space-y-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BsPerson className="text-accent" />
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-gray-600 text-sm font-semibold">First Name</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent"
              type="text"
              readOnly
              disabled
              {...register("firstName")}
            />
          </div>
          <div className="space-y-2">
            <label className="text-gray-600 text-sm font-semibold">Last Name</label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent"
              type="text"
              readOnly
              disabled
              {...register("lastName")}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-gray-600 text-sm font-semibold flex items-center gap-2">
              <BsEnvelope className="text-accent" />
              Email Address
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent"
              type="text"
              readOnly
              disabled
              {...register("email")}
            />
          </div>
        </div>
      </div>

      {/* Price Summary Section */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BsCash className="text-accent" />
          Price Summary
        </h2>
        <div className="bg-accent bg-opacity-10 rounded-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Total Amount</span>
            <span className="text-2xl font-bold text-accent">
              £{paymentIntent.totalCost.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-500">Includes all taxes and charges</p>
        </div>
      </div>

      {/* Payment Section */}
      <div className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BsCreditCard className="text-accent" />
          Payment Details
        </h2>
        <div className="border border-gray-200 rounded-lg p-4">
          <CardElement
            id="payment-element"
            className="p-2 text-sm"
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          disabled={isLoading}
          type="submit"
          className="bg-accent hover:bg-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:bg-gray-400"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">↻</span> Processing...
            </span>
          ) : (
            "Confirm Booking"
          )}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;