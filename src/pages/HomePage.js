import BotNav from "../components/BottomNavigation/BotNav"
import HomeSection from "../components/Homescreen/HomeSection";
import HeaderHomescreen from "../components/Header/HeaderHomescreen";
export default function HomePage() {
    return (
        <>
            <HeaderHomescreen></HeaderHomescreen>
            <HomeSection></HomeSection>
            <BotNav />
        </>
    )
}