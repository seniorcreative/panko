"use server";

import { cookies } from "next/headers";

export async function setDefaultLocaleCookie() {
  const cookieStore = cookies();
  const hasLocaleCookie = cookieStore.has("NEXT_LOCALE");

  if (!hasLocaleCookie) {
    cookieStore.set("NEXT_LOCALE", "en-US");
  }
}

export async function changeLanguageCookieValue(locale: string) {
  cookies().set("NEXT_LOCALE", locale);
}
