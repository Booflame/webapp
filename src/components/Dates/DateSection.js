import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import DatePost from "./DatePost";
import './datecards.css'

// Nichlas
export default function DateSection() {
    
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const url = "https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts?_embed&per_page=100"
            const res = await fetch(url);
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

            setPosts(filterData)
        }
        getData()
    }, [location]);

    const length = posts.length;
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(1);
    const [prev, setPrev] = useState(length - 1);

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setNext(next === length - 1 ? 0 : next + 1)
        setPrev(prev === length - 1 ? 0 : prev + 1)
    }
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setNext(next === 0 ? length - 1 : next - 1)
        setPrev(prev === 0 ? length - 1 : prev - 1)
    }

    return (
        <>
            <section className="card-list"> {posts.map((post, index) => {
                return (
                    <div className={index === current ? "slide active" : "slide"} key={index}>
                        {index === prev && (
                            <DatePost post={post} />
                        )}
                        {index === current && (
                            <DatePost post={post} />
                        )}
                        {index === next && (
                            <DatePost post={post} />
                        )}
                    </div>
                )
            })}
            </section>

            <div className="controlls">
                <div onClick={prevSlide} className="slider-btn">&#10094;</div>
                <div onClick={nextSlide} className="slider-btn">&#10095;</div>
            </div>
        </>
    );
}
