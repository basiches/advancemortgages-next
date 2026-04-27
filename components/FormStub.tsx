'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitLead, type LeadFormState } from '@/app/actions';

type Props = {
  variant?: 'contact' | 'multistep';
  className?: string;
};

const initialState: LeadFormState = { status: 'idle' };

function SubmitButton({ variant }: { variant: Props['variant'] }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending…' : variant === 'multistep' ? 'Get Pre-Approved' : 'Send Message'}
    </button>
  );
}

export default function FormStub({ variant = 'contact', className = '' }: Props) {
  const [state, formAction] = useActionState(submitLead, initialState);

  if (state.status === 'success') {
    return (
      <div className={`rounded-lg bg-green-50 border border-green-200 p-6 text-center ${className}`}>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thanks — we&apos;ll be in touch.</h3>
        <p className="text-sm text-green-700">
          We received your enquiry and will get back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className={`space-y-4 ${className}`}>
      <input type="hidden" name="variant" value={variant} />
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="firstName" placeholder="First name" className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
        <input required name="lastName" placeholder="Last name" className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <input required type="email" name="email" placeholder="Email address" className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      <input required type="tel" name="phone" placeholder="Phone number" className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      {variant === 'multistep' && (
        <select name="goal" className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent">
          <option>What are you looking to do?</option>
          <option>Buy a home</option>
          <option>Refinance</option>
          <option>Get a HELOC</option>
          <option>Private / self-employed mortgage</option>
          <option>Commercial mortgage</option>
        </select>
      )}
      <textarea name="message" placeholder="How can we help?" rows={4} className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      {state.status === 'error' && (
        <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {state.message}
        </p>
      )}
      <SubmitButton variant={variant} />
      <p className="text-xs text-gray-500">
        By submitting you agree to be contacted about your inquiry.
      </p>
    </form>
  );
}
