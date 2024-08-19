import Header from "@/components/shared/header"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AuthLayout
