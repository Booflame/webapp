import { useNavigate } from "react-router-dom";
import './BackOpret.css';

// Her ses en onClick funktion, hvor navigate bruges til at navigere 1 side tilbage når man trykker på billedet
export const BackOpret = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backopret" onClick={() => navigate(-1)}><img src="/images/back.png" alt="Notifications button" /></button>
        </>
    );
};