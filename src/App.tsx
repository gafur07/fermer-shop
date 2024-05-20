import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Category from "./screens/Category/Category"
import Main from "./screens/Main/Main"
import Register from "./screens/Register/Register"
import Login from "./screens/Login/Login"

const App = () => {
  return (
    <>
    <div className="">
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App