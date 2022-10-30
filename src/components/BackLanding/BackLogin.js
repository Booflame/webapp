import { useNavigate } from "react-router-dom";
import './BackLogin.css';

export const BackLogin = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backlanding" onClick={() => navigate(-1)}><img src="/images/back.png" alt="Notifications button" /></button>
        </>
    );
};