import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthFlex from "../components/styleComponents/AuthFlex";
import AuthText from "../components/styleComponents/AuthText";
import Button from "../components/styleComponents/Button";
import Input, { PasswordInput } from "../components/styleComponents/Input";
import Text from "../components/styleComponents/Text";
import Title from "../components/styleComponents/Title";
import Wrapper from "../components/styleComponents/Wrapper";
import { logIn } from "../store/slices/userSlice";

function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (login, password) => {
        if (
            login.toLowerCase() !== "admin" ||
            password.toLowerCase() !== "admin"
        ) {
            alert("Ошибка. Попробуйте еще раз!");
        } else {
            // делаю проверку, чтобы пользователь мог зайти только под с помощью слова "admin",
            // также привожу вводимое значение в нижний регистр
            dispatch(
                logIn({
                    login: login,
                    password: password,
                    isLogged: true,
                })
            );
            // после того как пользователь вошел, перенаправляю его в страницу "home"
            navigate("/testProject/home");
        }
    };

    return (
        <section>
            <Wrapper>
                <Text fontSize={"24"} lineHeight={"29"}>
                    <Title marginBottom={"45px"}>Autorization</Title>
                    <AuthFlex margin={25} content={`space-between`}>
                        <AuthText>login</AuthText>
                        <Input onChange={(e) => setLogin(e.target.value)} />
                    </AuthFlex>
                    <AuthFlex margin={"25"} content={`space-between`}>
                        <AuthText>password</AuthText>
                        <PasswordInput
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </AuthFlex>
                    <Button onClick={() => handleClick(login, password)}>
                        Submit
                    </Button>
                </Text>
            </Wrapper>
        </section>
    );
}

export default Login;
