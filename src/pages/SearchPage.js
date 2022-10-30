import BotNav from "../components/BottomNavigation/BotNav"
import Header from "../components/Header/Header"
import "./search.css"
import CategoryOne from "../components/Search/CategoryOne"
import CategoryTwo from "../components/Search/CategoryTwo"

export default function SearchPage() {


    return (
        <>
            <Header></Header>
            <div className="searchpage-title"><h1>Kategorier</h1></div>
            <p className="searchpage-text">Udforsk Otters brede udvalg af aktiviteter, samlet i inddelte kategorier. Kig dig omkring og udforsk nye, klassiske, hyggelige og spændende aktiviteter!</p>
            <div className="tag-links"><a href="#selvforkælelse">Selvforkælelse</a></div>
            <div className="tag-links"><a href="#efterår">Efterår</a></div>
            <div className="tag-links"><a href="#fest">Fest</a></div>
            <div className="searchpage-subtitle" id="efterår"><h2>Otters udvalgte efterårsaktiviteter</h2></div>
            <CategoryOne></CategoryOne>
            <div className="searchpage-subtitle" id="selvforkælelse"><h2>Tid til selvforkælelse</h2></div>
            <CategoryTwo></CategoryTwo>
            <div className="searchpage-subtitle" id="fest"><h2>Ideer til fester</h2></div>
            <BotNav></BotNav>
        </>
    )
}