import {Link} from "react-router-dom";
import {handleLogin} from "./LoginFunction"
import logo from "../../image/logo.png";
import "../../css/login.css"

const Login = () => {
    return (
        <div className={"loginFormBox"}>
            <Link to={"/"}><img src={logo} alt={"logo"}/></Link>
            <form className={"loginForm"}>
                <label>이메일</label>
                <input
                    type={"email"}
                    placeholder={"e-mail"}
                    required id={"loginEmail"}/>
                <label>비밀번호</label>
                <input
                    type={"password"}
                    placeholder={"영문, 숫자, 특수문자 포함 8~16자"}
                    required id={"loginPassword"}/>
                <button onClick={handleLogin}>로그인</button>
                <Link to={"/register"}>회원가입</Link>
            </form>
        </div>
    );
};

export default Login;