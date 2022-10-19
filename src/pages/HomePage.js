import Switch from '../components/Switch';
import Header from "../components/Header/Header";
import BotNav from "../components/BottomNavigation/BotNav"

export default function HomePage() {
    return (
        <>
            <section>
                <Header></Header>
                <h1>halløj</h1>
            </section>
            <Switch />
            <BotNav />
        </>
    )
}