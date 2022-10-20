import Header from "../components/Header/Header";
import BotNav from "../components/BottomNavigation/BotNav"
import Parameter from '../components/Parameters/Parameters';

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <Parameter />
            <BotNav />
        </>
    )
}