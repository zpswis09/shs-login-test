import {Link} from "react-router-dom";
import {
    checkAddress,
    checkEmail,
    checkName,
    checkNickname,
    checkPassword,
    checkPasswordConfirm,
    checkPhone
} from "./RegisterRegex"
import logo from "../../image/logo.png";
import "../../css/register.css"
import {handleRegister} from "./RegisterFunction";

const Register = () => {
    return (
        <div>
            <Link to={"/"}><img src={logo} alt={"logo"}/></Link>
            <form className={"registerForm"}>
                <label>이메일</label>
                <input type={"email"}
                       placeholder={"e-mail"}
                       required
                       onChange={checkEmail}
                       name={"email"}
                       id={"registerEmail"}/>
                <label>이름</label>
                <input type={"name"}
                       placeholder={"name"}
                       required
                       onChange={checkName}
                       name={"name"}
                       id={"registerName"}/>
                <label>닉네임</label>
                <input type={"nickname"}
                       placeholder={"nickname"}
                       required
                       onChange={checkNickname}
                       name={"nickname"}
                       id={"registerNickname"}/>
                <label>비밀번호</label>
                <input type={"password"}
                       placeholder={"password"}
                       required
                       onChange={checkPassword}
                       name={"password"}
                       id={"registerPassword"}/>
                <label>비밀번호 확인</label>
                <input type={"password"}
                       placeholder={"password"}
                       required
                       onChange={checkPasswordConfirm}
                       name={"passwordConfirm"}
                       id={"registerPasswordConfirm"}/>
                <label>전화번호</label>
                <input type={"text"}
                       placeholder={"ex) 010-1111-1111"}
                       required
                       onChange={checkPhone}
                       name={"telephone"}
                       id={"registerPhone"}/>
                <label>주소</label>
                <input type={"text"}
                       placeholder={"address"}
                       required
                       onChange={checkAddress}
                       name={"address"}
                       id={"registerAddress"}/>
                <button onClick={handleRegister}>회원가입</button>
                <Link to={"/login"}>로그인</Link>
            </form>
        </div>
    );
};

export default Register;