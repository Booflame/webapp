import { useNavigate } from "react-router-dom";
import './Back.css';

export const Back = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backbutton" onClick={() => navigate(-1)}><img src="/images/back.png" alt="Notifications button" /></button>
        </>
    );
};