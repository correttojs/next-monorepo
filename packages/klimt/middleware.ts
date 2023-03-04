import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "de"];

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("Accept-Language");
  const languages = new Negotiator({
    headers: { "accept-language": acceptLanguage ?? "" },
  }).languages();

  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
