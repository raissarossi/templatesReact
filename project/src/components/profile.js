import fotoV from "../imgs/fotoV.png"
import fotoC from "../imgs/fotoC.png"
import { useState } from "react";

const Profile = ({ pessoa }) => {
    var person1 = ""
    if (pessoa == "v") {
        person1 = "Vinicius Leme"
    }
    else if (pessoa == "c") {
        person1 = "Caio Porto"
    }
    else {
        person1 = ""
    }

    return (
        <div className="containerProfile" color>
            {pessoa == "v" ?
                <img src={fotoV} className={"showProfile"}></img>
                :
                <img src={fotoC} className={"showProfile"}></img>
            }
            <h2>{person1}</h2>
        </div>
    );
}

export default Profile;