import { handleLead, readLeadRequest } from "../../../lib/lead.mjs";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const parsed = await readLeadRequest(request);
  const result = parsed.ok
    ? await handleLead(parsed.body, {
        supabaseUrl: process.env.SUPABASE_URL,
        publishableKey: process.env.SUPABASE_PUBLISHABLE_KEY,
      })
    : parsed.response;
  return Response.json(result.body, {
    status: result.status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
