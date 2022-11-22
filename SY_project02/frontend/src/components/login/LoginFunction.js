import axios from "axios";
import {redirect} from "react-router-dom";

export const handleLogin = (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    if (email.value === "" || email.value === undefined) {
        console.log("아이디를 입력하세요");
        return false;
    }

    if (password.value === "" || password.value === undefined) {
        console.log("비밀번호를 입력하세요");
        return false;
    }

    console.log(`email = ${email.value}, password ${password.value}`);

    // node 연결 test
    axios.post("http://localhost:8000/auth/login", {
        email: email.value,
        password: password.value,
    })
        .then((res) => {
            console.log("login => ", res.data);
            if (res.data.code === 200) {
                window.sessionStorage.setItem("email", email.value);
                window.sessionStorage.setItem("password",password.value);
                redirect("/");
            } else {
                alert("아이디, 패스워드가 정확하지 않습니다.");
                email.value = "";
                password.value = "";
            }
        })
        .catch((error) => {
            console.error(error)
        });
};
