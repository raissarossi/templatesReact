import { useEffect, useState } from "react";
import Profile from "./profile";

const ProfileModal = ({ pessoa }) => {
    var modalCurso = ""
    var modalCargo = ""
    var modalPosicao = ""

    if (pessoa == "v") {
        modalCurso = "Engenharia da Computação 2022"
        modalCargo = "Acessor Trainee de Mercado Conpec 2023"
        modalPosicao = "Dev Júnior Conpec 2023"
    }
    else if (pessoa == "c") {
        modalCurso = "Engenharia da Computação 2022"
        modalCargo = "Acessor Trainee de Mercado Conpec 2023"
        modalPosicao = "Dev Júnior Conpec 2023"
    }
    else {
        modalCurso =""
        modalCargo =""
        modalPosicao =""
    }

    return (
        <div className="containerModal">
            <Profile pessoa={pessoa} />
            <ul className="modalText">
                <l>{modalCurso}</l>
                <l>{modalCargo}</l>
                <l>{modalPosicao}</l>
            </ul>

        </div>
    );
}

export default ProfileModal;