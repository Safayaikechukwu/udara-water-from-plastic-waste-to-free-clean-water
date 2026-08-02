import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATA_DIR = path.join(process.cwd(), "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

type Subscriber = {
  email: string;
  createdAt: string;
};

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await readFile(SUBSCRIBERS_FILE, "utf8");
    const parsed = JSON.parse(raw) as Subscriber[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const subscribers = await readSubscribers();
  if (!subscribers.some((entry) => entry.email === email)) {
    subscribers.push({ email, createdAt: new Date().toISOString() });
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2), "utf8");
  }

  return NextResponse.json({ ok: true });
}
