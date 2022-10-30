import { useNavigate } from "react-router-dom";
import './BackOpret.css';

export const BackOpret = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backopret" onClick={() => navigate(-1)}><img src="/images/back.png" alt="Notifications button" /></button>
        </>
    );
};