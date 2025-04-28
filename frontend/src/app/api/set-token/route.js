import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    try {
        const { token } = await req.json()
        // const stringData = JSON.stringify({ token })

        const response = NextResponse.json({ success: true, message: "token Set SuccessFully!!" }, { status: 200 })

        response.cookies.set("token",token, {
            httpOnly: true,
            sameSite: "Strict",
            // maxAge: , 
            path: "/"
        })
        return response
    } catch (error) {
        return NextResponse.json({ success: false, message: "failed token Set!!" }, { status: 500 })
    }
}