"use server";

import { cookies } from "next/headers";

const cookieConfig = {
  expires: new Date(new Date().getTime() + 100 * 24 * 60 * 60 * 1000),
  // secure: true,
  // sameSite: true,
};

export async function setDefaultLocaleCookie() {
  const cookieStore = await cookies();
  const hasLocaleCookie = cookieStore.has("NEXT_LOCALE");

  if (!hasLocaleCookie) {
    const defaultLocale = "en-US";
    cookieStore.set("NEXT_LOCALE", defaultLocale); //, cookieConfig);
    return defaultLocale;
  } else {
    return cookieStore?.get("NEXT_LOCALE")?.value ?? "en-US";
  }
}

export async function getCurrentLocale() {
  const cookieStore = await cookies();
  return cookieStore?.get("NEXT_LOCALE")?.value ?? "en-US";
}

export async function changeLanguageCookieValue(locale: string) {
  const cookieStore = await cookies();
  cookieStore.set("NEXT_LOCALE", locale); // , cookieConfig);
}
