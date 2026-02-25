import { NextRequest, NextResponse } from "next/server";

/**
 * Quarantine Proxy — HTTP 410 (Gone) for all spam URLs.
 *
 * - Lets the root path (/) through normally.
 * - Lets Next.js internals (_next/*) and favicon through.
 * - Returns 410 Gone for EVERYTHING else, telling Google the page
 *   has been permanently removed and should be deindexed.
 */
export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow root path
    if (pathname === "/") {
        return NextResponse.next();
    }

    // Allow Next.js internals and static assets
    if (
        pathname.startsWith("/_next") ||
        pathname === "/favicon.ico"
    ) {
        return NextResponse.next();
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
