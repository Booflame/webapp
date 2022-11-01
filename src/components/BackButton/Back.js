import { useNavigate } from "react-router-dom";
import './Back.css';

// Freja
// Her ses en onClick funktion, hvor navigate bruges til at navigere 1 side tilbage når man trykker på billedet
export const Back = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="backbutton" onClick={() => navigate(-1)}><img src="/images/back.png" alt="Notifications button" /></button>
        </>
    );
};