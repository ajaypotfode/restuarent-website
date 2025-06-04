const { NextResponse } = require("next/server")

export const POST = async (req, res) => {
    try {
        const response = NextResponse.json({ success: true, message: "token removed and user Logged Out" }, { status: 200 })
        response.cookies.set("restroToken", "", {
            httpOnly: true,
            path: '/',
            maxAge: 0,
        })
        return response
    } catch (error) {
        return NextResponse.json({ success: false, message: "failed to removed token and user Logge Out" }, { status: 500 })
    }
}