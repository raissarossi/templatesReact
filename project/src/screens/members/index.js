import Header from "../../components/header";
import Profile from "../../components/profile";
import "./styleMembers.css"
import ProfileModal from "../../components/profileModal";
import { useState } from "react";

const Members = () => {
    const [modal, setModal] = useState("")

    return (
        <div className="main">
            <Header screen={"members"} />
            <div className="container" >
                <div className="container1">
                    <h1>Quem somos?</h1>
                    <h4>Integrantes do Projeto Trainee da Conpec em 2023, estudantes de Engenharia e Ciência da Computação na Unicamp. </h4>
                </div>
                <div className="profiles">
                    <button className="profileButton"
                        onClick={() => setModal("c")}>
                        <Profile pessoa={"c"} />
                    </button>
                    <button className="profileButton"
                        onClick={() => setModal("v")}>
                        <Profile pessoa={"v"} />
                    </button>
                </div>
            </div>

            <div className={modal != "" ? "modal" : "modalClose"}>
                <div className="buttonX">
                    <button onClick={() => setModal("")}>X</button>
                </div>
                <>
                    {
                        modal == "c" ?
                            <ProfileModal pessoa={"c"} />
                            : modal == "v" ?
                                <ProfileModal pessoa={"v"} />
                                :
                                <></>
                    }
                </>
            </div>
        </div>
    );
}

export default Members;