import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const { pathname } = request.nextUrl
    const cookieData = await request.cookies.get("restroToken")
    // const url = request.nextUrl


    let token
    if (cookieData) {
        token = cookieData.value
    }

    // grtting role from token which is pass through the token while login time
    let role
    if (token) {
        const decoded = jwtDecode(token)
        role = decoded.role
    }


    const protectedRoute = ['/cart', "/orders", "/menu", "/admin"]

    if (token && (pathname === '/login' || pathname === '/signup')) {
        return NextResponse.redirect(new URL('/', request.url));
    }


    if (pathname.startsWith('/admin') && role !== "admin") {
        const redirectUrl = new URL('/', request.url)
        redirectUrl.searchParams.set("error", "Admin_Only")
        return NextResponse.redirect(redirectUrl)
    }

    if (!token && protectedRoute.some((route) => pathname.startsWith(route))) {
        const redirectUrl = new URL('/login', request.url)
        redirectUrl.searchParams.set("error", "Login_required")
        return NextResponse.redirect(redirectUrl)

    }

}

export const config = {
    matcher: [
        '/login',
        '/signup',
        '/admin',
        '/admin/:path*',
        '/menu',
        '/cart',
        '/orders',
        '/'
    ]
}