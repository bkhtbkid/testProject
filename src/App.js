import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Container from "./components/styleComponents/Container";

function App() {
    // Получаю isLogged с redux чтобы проверить, вошел ли пользователь или нет.
    const isLogged = useSelector((state) => state.user.isLogged);

    return (
        <div className="App">
            <Header />
            <Container>
                <Routes>
                    {isLogged !== true ? (
                        <Route path="/testProject" element={<Login />} />
                    ) : (
                        <Route path="/testProject/home" element={<Home />} />
                    )}
                    <Route path="*" element={<Login />} />
                </Routes>
            </Container>
        </div>
    );
}

export default App;
