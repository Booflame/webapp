import BotNav from "../components/BottomNavigation/BotNav"
import Header from "../components/Header/Header"
import "../components/Search/search.css"
import CategoryOne from "../components/Search/CategoryOne"
import CategoryTwo from "../components/Search/CategoryTwo"
import CategoryThree from "../components/Search/CategoryThree"
import CategoryFour from "../components/Search/CategoryFour"
import CategoryFive from "../components/Search/CategoryFive"
import CategorySix from "../components/Search/CategorySix"


/* Laura */

export default function SearchPage() {

    return (
        <>
            <Header></Header>
            <div className="searchpage-title"><h1>Kategorier</h1></div>
            <p className="searchpage-text">Udforsk Otters brede udvalg af aktiviteter, samlet i inddelte kategorier. Kig dig omkring og udforsk nye, klassiske, hyggelige og spændende aktiviteter!</p>
            <div className="tag-container">
                <div className="tag-links"><a href="#selvforkælelse">Selvforkælelse</a></div>
                <div className="tag-links"><a href="#efterår">Efterår</a></div>
                <div className="tag-links"><a href="#fest">Fest</a></div>
                <div className="tag-links"><a href="#sport">Sport</a></div>
                <div className="tag-links"><a href="#romantisk">Romantisk</a></div>
                <div className="tag-links"><a href="#udendørs">Udendørs</a></div>
                <div className="tag-links"><a href="#gratis">Gratis</a></div>
                <div className="tag-links"><a href="#opskrifter">Opskrifter</a></div>
            </div>
            <div className="searchpage-subtitle" id="efterår"><h2>Otters udvalgte efterårsaktiviteter</h2></div>
            <CategoryOne></CategoryOne>
            <div className="searchpage-subtitle" id="selvforkælelse"><h2>Tid til selvforkælelse</h2></div>
            <CategoryTwo></CategoryTwo>
            <div className="searchpage-subtitle" id="fest"><h2>Ideer til fester</h2></div>
            <CategoryThree></CategoryThree>
            <div className="searchpage-subtitle" id="sport"><h2>Sportsaktiviteter</h2></div>
            <CategoryFour></CategoryFour>
            <div className="searchpage-subtitle" id="romantisk"><h2>Romantiske dates</h2></div>
            <CategoryFive></CategoryFive>
            <div className="searchpage-subtitle" id="udendørs"><h2>Udendørsaktiviteter</h2></div>
            <CategorySix></CategorySix>
            <div className="searchpage-subtitle" id="gratis"><h2>Intet budget? Intet problem</h2></div>
            <div className="searchpage-subtitle" id="opskrifter"><h2>Lækre opskrifter</h2></div>
            <BotNav></BotNav>
        </>
    )
}