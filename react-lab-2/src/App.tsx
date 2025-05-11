import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import TodoPage from "./pages/TodoPage"
import {UserProvider} from "./context/UserContext"


const App = () =>{
  return (
   <BrowserRouter>
   <UserProvider>
    <Routes>
      <Route path="/" element={<Layout />}> 
      <Route index element={<LoginPage />} />
      <Route path="TodoPage" element={<TodoPage/>}>
      
      
      </Route>
      </Route>
    </Routes>
    </UserProvider>
   </BrowserRouter>  )
}
export default App