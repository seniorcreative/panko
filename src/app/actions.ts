"use server";

import { cookies } from "next/headers";

export async function setDefaultLocaleCookie() {
  const cookieStore = cookies();
  const hasLocaleCookie = cookieStore.has("NEXT_LOCALE");
  const defaultLocale = "en-US";
  if (!hasLocaleCookie) {
    cookieStore.set("NEXT_LOCALE", defaultLocale);
  }
  return defaultLocale;
}

export async function changeLanguageCookieValue(locale: string) {
  cookies().set("NEXT_LOCALE", locale);
}
