import axios from "axios";

export const handleRegister = (e) => {
    e.preventDefault();

    const email = document.getElementById("registerEmail");
    const name = document.getElementById("registerName");
    const nickname = document.getElementById("registerNickname");
    const password = document.getElementById("registerPassword");
    const passwordConfirm = document.getElementById("registerPasswordConfirm");
    const telephone = document.getElementById("registerPhone");
    const address = document.getElementById("registerAddress");

    if (email.value === "" || email.value === undefined) {
        console.log("이메일을 입력하세요");
        return false;
    }

    if (name.value === "" || name.value === undefined) {
        console.log("이름을 입력하세요");
        return false;
    }

    if (nickname.value === "" || nickname.value === undefined) {
        console.log("닉네임을 입력하세요");
        return false;
    }

    if (password.value === "" || password.value === undefined) {
        console.log("비밀번호를 입력하세요");
        return false;
    }

    if (passwordConfirm.value === "" || passwordConfirm.value === undefined) {
        console.log("비밀번호 확인을 입력하세요");
        return false;
    }

    if (telephone.value === "" || telephone.value === undefined) {
        console.log("전화번호를 입력하세요");
        return false;
    }

    if (address.value === "" || address.value === undefined) {
        console.log("주소를 입력하세요");
        return false;
    }

    console.log(`email = ${email.value}, name = ${name.value}, nickname = ${nickname.value} password = ${password.value}, telephone = ${telephone.value}, address = ${address.value}  `);

// node 연결 test
    axios.post("http://localhost:8000/auth/join", {
        email: email.value,
        name: name.value,
        nickname: nickname.value,
        password: password.value,
        telephone: telephone.value,
        address: address.value
    })
        .then((res) => {
            console.log("register => ", res.data);
            if (res.data.code === 200) {
                window.sessionStorage.setItem("email", email.value);
                window.sessionStorage.setItem("name", name.value);
                window.sessionStorage.setItem("nickname", nickname.value);
                window.sessionStorage.setItem("password", password.value);
                window.sessionStorage.setItem("phone", telephone.value);
                window.sessionStorage.setItem("address", address.value);
            } else {
                alert("정확하지 않습니다.");
                email.value = "";
                name.value = "";
                nickname.value = "";
                password.value = "";
                telephone.value = "";
                address.value = "";
            }
        })
        .catch((error) => {
            console.error(error)
        });
};
