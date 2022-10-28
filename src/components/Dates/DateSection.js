import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DatePost from "./DatePost";
import './datecards.css'

export default function DateSection() {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts?_embed&per_page=100");
            const data = await res.json();

            const filterWho = location.state.who.toLowerCase()
            const filterWhere = location.state.where.toLowerCase()
            const filterWhen = location.state.when.toLowerCase()
            if (location.state.budget.toLowerCase() === "gratis") {
                location.state.budget = "none"
            }
            const filterBudget = location.state.budget.toLowerCase()

            const filterData = data
            .filter(e => e.acf.who.includes(filterWho))
            .filter(e => e.acf.where.includes(filterWhere))
            .filter(e => e.acf.time.includes(filterWhen))
            .filter(e => e.acf.budget.includes(filterBudget))

            console.log(data);
            console.log(filterData);
            setPosts(filterData);
        }
        getData();
    }, [location]);

    const [current, setCurrent] = useState(0);
    const length = posts.length;

    function nextSlide () {  
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log("next nice")
        console.log(current)
    }
    function prevSlide () {  
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log("prev nice")
        console.log(current)
    }

    // if(!Array.isArray(posts) || posts.length <= 0) {
    //     console.log("nice")
    // }


    return (
        <>
            <section className="card-list"> {posts.map((post, index) => (
                <DatePost className={index === current ? "slide active" : "slide"} key={index} post={post} />
            ))}</section>
            <div className="controlls">
                <div onClick={prevSlide} className="slider-btn">&#10094;</div>
                <div onClick={nextSlide} className="slider-btn">&#10095;</div>
            </div>
        </>
    );
}
