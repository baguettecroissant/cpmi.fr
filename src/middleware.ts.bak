import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware — Quarantine 410 + pSEO whitelist.
 *
 * The matcher below already excludes _next, static files, and images,
 * so the middleware only runs on "real" page routes.
 *
 * - Lets the root path (/) through normally.
 * - Lets the 3 pSEO prestation prefixes through.
 * - Lets annuaire, devis, mentions-legales, guides through.
 * - Returns 410 Gone for EVERYTHING else (old spam URLs).
 */

const ALLOWED_PREFIXES = [
    "/installation-ascenseur",
    "/climatisation-entreprise",
    "/borne-de-recharge-pro",
    "/annuaire",
    "/devis",
    "/mentions-legales",
    "/guides",
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow root path
    if (pathname === "/") {
        return NextResponse.next();
    }

    // Allow whitelisted prefixes
    for (const prefix of ALLOWED_PREFIXES) {
        if (pathname.startsWith(prefix)) {
            return NextResponse.next();
        }
    }

    // 🔥 Everything else gets a 410 Gone
    return new NextResponse("410 - Page supprimée définitivement", {
        status: 410,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}

export const config = {
    matcher: [
        /*
         * Match all request paths EXCEPT:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico, icon.png, sitemap.xml, robots.txt
         * - image files (png, jpg, jpeg, svg, webp, gif, ico)
         */
        "/((?!_next/static|_next/image|favicon\\.ico|icon\\.png|sitemap\\.xml|robots\\.txt|.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico)$).*)",
    ],
};
