import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import imgHome from "../../imgs/imgHome.png";
import "./styleHome.css"

const Home = () => {
    const rota = useNavigate()
    return (
        <>
            <div className="main">
                a
            </div>
            <div className="main1">
                <Header screen={"home"} />
                <div className="container1">
                    <h1 className="">Sucesso</h1>
                    <h3 className="">dos projetos comerciais</h3>
                </div>
                <div className="container2">
                    <div className="containerImg">
                        <img src={imgHome} />
                    </div>
                    <div className="containerTexto">
                        <p>Como garantir o sucesso dos projetos da Conpec e aumentar as chances de ser bem sucedido no mercado após seu desenvolvimeno?</p>
                        <button className="button1">Descubra nossa solucao</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;