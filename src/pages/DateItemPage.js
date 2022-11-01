import { useParams } from "react-router-dom";
import BotNav from "../components/BottomNavigation/BotNav";
import DateItemComponent from "../components/Dates/DateItemComponent";
import Header from "../components/Header/Header";

/* Nichlas */

export default function DateItem() {
    let params = useParams()
    console.log(params)
    return (
        <>
            <Header />
            <DateItemComponent id={params.ItemId} />
            <BotNav />
        </>
    );
}