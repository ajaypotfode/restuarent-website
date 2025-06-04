"use client";
// import Store from "@/redux/store";
import { Provider } from "react-redux";
import Store from "../redux/store";
import { Suspense, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";


export function Providers({ children }) {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const pathname = usePathname()
  const router = useRouter()

  // this is use to notify user protected routes
  useEffect(() => {
    if (error === "Login_required") {
      toast.error("You have to Login First!")
    }
    if (error) {
      router.replace(pathname)
    }
  }, [error, pathname])


  return (
    <Provider store={Store}>{children}</Provider>
  )
}


const ProviderSWrapper = ({ children }) => {
  return (
    <Suspense>
      <Providers>
        {children}
      </Providers>
    </Suspense>
  )
}

export default ProviderSWrapper