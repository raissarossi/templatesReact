import { useNavigate } from "react-router-dom";
import "./styleComponents.css"
import iconW from "../imgs/logoW.png";

const Header = ({screen}) => {
    const rota = useNavigate()
    return ( 
        <div className="containerHeader">
            <button className={screen=="home" ? "buttonSelected" : "button"} onClick={()=>rota("/")}>Home</button>
            <button className={screen=="members" ? "buttonSelected" : "button"}  onClick={()=>rota("/members")}>Members</button>
            <button onClick={()=>rota("/")}>Solution</button>
            <button onClick={()=>rota("/")}>Process</button>
            <img src={iconW} className="logoImg" />
        </div>
     );
}
 
export default Header;

