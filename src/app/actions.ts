"use server";

import { cookies } from "next/headers";

export async function setDefaultLocaleCookie() {
  const cookieStore = cookies();
  const hasLocaleCookie = cookieStore.has("NEXT_LOCALE");

  if (!hasLocaleCookie) {
    const defaultLocale = "en-US";
    cookieStore.set("NEXT_LOCALE", defaultLocale);
    return defaultLocale;
  } else {
    return cookieStore?.get("NEXT_LOCALE")?.value ?? "en-US";
  }
}

export async function getCurrentLocale() {
  const cookieStore = cookies();
  return cookieStore?.get("NEXT_LOCALE")?.value ?? "en-US";
}

export async function changeLanguageCookieValue(locale: string) {
  cookies().set("NEXT_LOCALE", locale);
}
