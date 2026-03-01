import { cookies } from "next/headers";
import { createHash } from "crypto";

const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "playzor-admin-session-secret-2024-x9k2m";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "playzor";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Abusayeed@2011";
const COOKIE_NAME = "playzor_admin_session";

export function generateToken(): string {
  return createHash("sha256")
    .update(`${ADMIN_USERNAME}:${ADMIN_PASSWORD}:${SESSION_SECRET}`)
    .digest("hex");
}

export function validateCredentials(
  username: string,
  password: string
): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function verifyAuth(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return token === generateToken();
}

export { COOKIE_NAME };
