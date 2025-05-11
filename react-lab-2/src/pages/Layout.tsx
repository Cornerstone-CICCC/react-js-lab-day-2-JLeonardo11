import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const Layout = () => {
  return (
    <>
      <div><Toaster /></div>
      <div className="container max-w-2xl mx-auto">

        <main className="flex flex-col items-center justify-center min-h-screen bg-stone-700">
          <Outlet />
        </main>

        {/** Footer */}
      </div>
    </>
  )
}

export default Layout