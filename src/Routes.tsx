import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login/Login"
import UsersList from "./components/usersList"

const RoutesProject = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/users-list" element={<UsersList />} />
        </Routes>
    </BrowserRouter>
    )
}

export default RoutesProject;