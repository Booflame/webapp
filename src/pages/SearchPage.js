import BotNav from "../components/BottomNavigation/BotNav"
import Header from "../components/Header/Header"
import "./search.css"
import CategoryOne from "../components/Search/CategoryOne"
import CategoryTwo from "../components/Search/CategoryTwo"

export default function SearchPage() {


    return (
        <>
            <Header></Header>
            <div className="searchpage-title"><h1>Kategori 1</h1></div>
            <CategoryOne></CategoryOne>
            <div className="searchpage-title"><h1>Kategori 2</h1></div>
            <CategoryTwo></CategoryTwo>
            <BotNav></BotNav>
        </>
    )
}