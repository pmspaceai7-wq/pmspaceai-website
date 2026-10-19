import { NextRequest, NextResponse } from "next/server";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];
//cont push2
// Pages permanently removed — return HTTP 410 Gone
// NOTE: paths with valid 301 redirects in next.config.mjs are intentionally omitted here
// (middleware runs before next.config.mjs, so those paths must reach the redirect rules)
const GONE_EXACT = new Set([
  "/intelligence-center",
  "/month",
  "/📩",
  "/%F0%9F%93%A9",   // 📷 emoji URL — permanently removed
]);

// Dynamic route segments that no longer exist — any slug under these prefixes is 410
// NOTE: /blog/* is omitted — next.config.mjs redirects /blog/:path* → /blogs
const GONE_PREFIXES = [
  "/webinars/",
];

const GONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="robots" content="noindex"/>
<title>Page Permanently Removed | PMSpace</title>
<style>body{font-family:sans-serif;max-width:600px;margin:80px auto;padding:0 20px;text-align:center}h1{font-size:2rem}a{color:#2563eb}</style>
</head>
<body>
<h1>410 — Page Permanently Removed</h1>
<p>This page has been permanently removed and is no longer available.</p>
<p><a href="/">Return to PMSpace Home</a></p>
</body>
</html>`;

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname, searchParams } = url;

  // Canonical URL cleanup in one hop: protocol, host, tracking params, and slash.
  const host = request.headers.get("host") || "";
  const proto = request.headers.get("x-forwarded-proto") || "";
  const isLocalHost = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  let shouldRedirect = false;

  if (process.env.NODE_ENV === "production" && !isLocalHost) {
    if (proto === "http") {
      url.protocol = "https:";
      shouldRedirect = true;
    }

    if (host.startsWith("www.")) {
      url.hostname = host.replace(/^www\./, "");
      shouldRedirect = true;
    }
  }

  const hasUtm = UTM_PARAMS.some((p) => searchParams.has(p));
  if (hasUtm) {
    UTM_PARAMS.forEach((p) => searchParams.delete(p));
    shouldRedirect = true;
  }

  // Leave trailing-slash normalization to Next.js so it does not conflict with
  // trailingSlash: true in next.config.mjs and create redirect loops on route navigation.
  if (shouldRedirect) {
    return NextResponse.redirect(url, { status: 301 });
  }

  // 410 Gone — permanently removed pages
  const normalizedPath = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  if (
    GONE_EXACT.has(normalizedPath) ||
    GONE_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     *   - _next/static  (static assets)
     *   - _next/image   (image optimisation)
     *   - favicon.ico
     *   - Files with common static extensions
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|woff2?|ttf|eot)).*)",
  ],
};
