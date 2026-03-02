import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware — Quarantine 410 + pSEO whitelist.
 *
 * - Lets the root path (/) through normally.
 * - Lets Next.js internals (_next/*) and favicon through.
 * - Lets the 3 pSEO prestation prefixes through.
 * - Lets annuaire, devis, mentions-legales through.
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

    // Allow Next.js internals and static assets
    if (
        pathname.startsWith("/_next") ||
        pathname === "/favicon.ico" ||
        pathname === "/icon.png" ||
        /\.(png|jpg|jpeg|svg|webp|gif|ico)$/i.test(pathname)
    ) {
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
    matcher: "/(.*)",
};
