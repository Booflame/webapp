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

    return (
        <>
            <section className="card-list"> {posts.map(post => (
                <DatePost key={post.id} post={post} />
            ))}</section>
        </>
    );
}
