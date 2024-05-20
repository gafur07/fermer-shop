import { Home } from "@/screens/Home/Home"
import Header from "../Header/Header"
import Main from "@/screens/Main/Main"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<>
		<Header />
		<Outlet />
		<Footer />
		</>
	)
}

export default Layout