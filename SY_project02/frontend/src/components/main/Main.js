import {Link} from "react-router-dom";
import logo from "../../image/logo.png"

const Main = () => {
    return (
        <>
            <Link to={"/"}><img src={logo} alt={"logo"}/></Link>
            <div style={{fontSize: "50"}}>
                Main
            </div>
            <Link to={"/login"}>로그인</Link>
        </>
    );
};

export default Main;