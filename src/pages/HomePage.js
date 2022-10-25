import Header from "../components/Header/Header";
import BotNav from "../components/BottomNavigation/BotNav"
import HomeSection from "../components/Homescreen/HomeSection";
export default function HomePage() {
    return (
        <>
            <Header></Header>
            <HomeSection></HomeSection>
            <h1>Home page</h1>
            <BotNav />
        </>
    )
}