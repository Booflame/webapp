import DateSection from "../components/Dates/DateSection";
import Header from "../components/Header/Header"
import Botnav from "../components/BottomNavigation/BotNav"

/* Nichlas */

export default function DatePage() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <DateSection />
            </div>
            <Botnav />
        </>
    );
}