const { NextResponse } = require("next/server")

export const POST = async (req, res) => {
    try {
        const response = NextResponse.json({ status: true, message: "token removed and user Logged Out" }, { status: 200 })
        response.cookies.set("authdata", "", {
            httpOnly: true,
            path: '/',
            maxAge: 0,
        })
        return response
    } catch (error) {
        return NextResponse.json({ status: false, message: "failed to removed token and user Logge Out" }, { status: 500 })
    }
}