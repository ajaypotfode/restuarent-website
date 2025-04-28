import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

export async function middleware(request) {
    const cookieData = await request.cookies.get("token")
    const url = request.nextUrl

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

    // const adminRoute = ["/admin"]

    // const protectedRoute = ["/cart"]
    const authRoute = ['/login', '/signup']

    if (url.pathname.startsWith('/admin') && role !== "admin") {
        return NextResponse.redirect(new URL("/", request.url))
        //    return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (url.pathname.startsWith('/cart') && !token) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (authRoute.includes(url.pathname) && token) {
        return NextResponse.redirect(new URL('/'))
    }

}

export const config = {
    matcher: [
        '/login',
        '/signup',
        '/admin',
        '/cart',
        '/'
    ]
}