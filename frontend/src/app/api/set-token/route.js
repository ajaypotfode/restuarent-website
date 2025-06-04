import { NextResponse } from "next/server"

export const POST = async (req, res) => {
    try {
        const { restroToken } = await req.json()
        // const stringData = JSON.stringify({ token })

        const response = NextResponse.json({ success: true, message: "token Set SuccessFully!!" }, { status: 200 })

        response.cookies.set("restroToken", restroToken, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 60 * 60 * 24,
            path: "/"
        })
        return response
    } catch (error) {
        return NextResponse.json({ success: false, message: "failed token Set!!" }, { status: 500 })
    }
}

// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export const POST = async (req) => {
//   try {
//     const { restroToken } = await req.json();
//     // console.log("rstro token is :",restroToken);

//     cookies().set("restroToken", restroToken, {
//       httpOnly: true,
//       sameSite: "Strict",
//       path: "/",
//       maxAge: 60 * 60 * 24 ,
//     });

//     return NextResponse.json({ success: true, message: "Token set successfully!" }, { status: 200 });
//   } catch (error) {
//     console.error("Error setting token:", error);
//     return NextResponse.json({ success: false, message: "Failed to set token" }, { status: 500 });
//   }
// };
