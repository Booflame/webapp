import { useParams } from "react-router-dom";
import DateItemComponent from "../components/DateItemComponent";

export default function DateItem() {
    let params = useParams()
    console.log(params)
    return (
        <>
            <DateItemComponent id={params.ItemId}></DateItemComponent>
        </>
    );
}
