import React from 'react';
import { useForm } from 'react-hook-form';

export default function CheckoutForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Shipping & Payment Details</h2>

      <div>
        <label className="block">Full Name</label>
        <input
          {...register('fullName', { required: 'Full Name is required' })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="John Doe"
        />
        {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
      </div>

      <div>
        <label className="block">Address</label>
        <input
          {...register('address', { required: 'Address is required' })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="123 Main St, City, Country"
        />
        {errors.address && <p className="text-red-600">{errors.address.message}</p>}
      </div>

      <div>
        <label className="block">City</label>
        <input
          {...register('city', { required: 'City is required' })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="New York"
        />
        {errors.city && <p className="text-red-600">{errors.city.message}</p>}
      </div>

      <div>
        <label className="block">Postal Code</label>
        <input
          {...register('postalCode', { required: 'Postal Code is required' })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="10001"
        />
        {errors.postalCode && <p className="text-red-600">{errors.postalCode.message}</p>}
      </div>

      <div>
        <label className="block">Country</label>
        <input
          {...register('country', { required: 'Country is required' })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="USA"
        />
        {errors.country && <p className="text-red-600">{errors.country.message}</p>}
      </div>

      <div>
        <label className="block">Card Number</label>
        <input
          {...register('cardNumber', {
            required: 'Card Number is required',
            pattern: {
              value: /^\d{16}$/,
              message: 'Enter valid 16 digit card number',
            },
          })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="1234 5678 9012 3456"
          maxLength={16}
        />
        {errors.cardNumber && <p className="text-red-600">{errors.cardNumber.message}</p>}
      </div>

      <div>
        <label className="block">Expiry Date (MM/YY)</label>
        <input
          {...register('expiryDate', {
            required: 'Expiry Date is required',
            pattern: {
              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
              message: 'Enter date in MM/YY format',
            },
          })}
          className="w-full border rounded px-3 py-2"
          type="text"
          placeholder="08/25"
          maxLength={5}
        />
        {errors.expiryDate && <p className="text-red-600">{errors.expiryDate.message}</p>}
      </div>

      <div>
        <label className="block">CVV</label>
        <input
          {...register('cvv', {
            required: 'CVV is required',
            pattern: {
              value: /^\d{3}$/,
              message: 'Enter 3 digit CVV',
            },
          })}
          className="w-full border rounded px-3 py-2"
          type="password"
          placeholder="123"
          maxLength={3}
        />
        {errors.cvv && <p className="text-red-600">{errors.cvv.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
      >
        Place Order
      </button>
    </form>
  );
}
