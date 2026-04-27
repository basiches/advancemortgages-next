'use server';

export type LeadFormState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string };

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const lead = {
    firstName: String(formData.get('firstName') ?? '').trim(),
    lastName: String(formData.get('lastName') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    goal: String(formData.get('goal') ?? '').trim() || undefined,
    message: String(formData.get('message') ?? '').trim() || undefined,
    variant: String(formData.get('variant') ?? 'contact'),
    submittedAt: new Date().toISOString(),
  };

  if (!lead.firstName || !lead.lastName || !lead.email || !lead.phone) {
    return { status: 'error', message: 'Please fill in all required fields.' };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  // ─────────────────────────────────────────────────────────────────────
  // TODO — Lead delivery: pick a provider and replace the line below.
  //
  // (A) Resend            — own infra, needs RESEND_API_KEY + verified domain
  // (B) Formspree         — 3rd-party, free up to ~50/mo, needs form ID
  // (C) Slack/Discord     — webhook URL, no account, lead lands in a channel
  //
  // The function returns { status: 'success' } on the happy path or
  // { status: 'error', message } if the provider fails. The UI handles both.
  // ─────────────────────────────────────────────────────────────────────
  console.log('[lead-submission] (stub — wire up provider)', lead);

  return { status: 'success' };
}
