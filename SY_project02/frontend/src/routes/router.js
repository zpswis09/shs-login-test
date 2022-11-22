import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../components/login/Login.js";
import Register from "../components/register/Register";
import Main from "../components/main/Main";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Main/>} />
                <Route path={"/login"} element={<Login/>} />
                <Route path={"/register"} element={<Register/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;