export const CHECKOUT_URL: string;
export const FALLBACK_URL: string;
export const MAX_BODY_BYTES: number;
export interface LeadConfig {
  supabaseUrl?: string;
  publishableKey?: string;
  timeoutMs?: number;
}
export interface LeadResult {
  status: number;
  body: {
    ok: boolean;
    message: string;
    fieldErrors?: Record<string, string>;
    checkoutUrl?: string;
    fallbackUrl?: string;
  };
}
export function readLeadRequest(
  request: Request,
): Promise<{ ok: true; body: unknown } | { ok: false; response: LeadResult }>;
export function handleLead(
  body: unknown,
  config?: LeadConfig,
  fetcher?: typeof fetch,
): Promise<LeadResult>;
