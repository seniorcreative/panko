"use server";

import { cookies } from "next/headers";

const cookieConfig = {
  expires: new Date().getTime() + 100 * 86400,
  secure: true,
  sameSite: true,
};

export async function setDefaultLocaleCookie() {
  const cookieStore = cookies();
  const hasLocaleCookie = cookieStore.has("NEXT_LOCALE");

  if (!hasLocaleCookie) {
    const defaultLocale = "en-US";
    cookieStore.set("NEXT_LOCALE", defaultLocale, cookieConfig);
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
  cookies().set("NEXT_LOCALE", locale, cookieConfig);
}
