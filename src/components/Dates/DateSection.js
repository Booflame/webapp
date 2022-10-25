import DatePost from "./DatePost";
import { useEffect, useState } from "react";

export default function DateSection() {
    const [posts, setPosts] = useState([]);
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts?_embed");
            const data = await res.json();

            const filterWho = sessionStorage.getItem("who").toLowerCase()
            const filterWhere = sessionStorage.getItem("where").toLowerCase()
            const filterWhen = sessionStorage.getItem("when").toLowerCase()
            let filterBudget = sessionStorage.getItem("budget").toLowerCase()
            if(filterBudget === "gratis"){
                filterBudget = "none"
                return filterBudget;
            }

            const filterData = data.filter(e => e.acf.who.includes(filterWho)).filter(e => e.acf.where.includes(filterWhere)).filter(e => e.acf.time.includes(filterWhen)).filter(e => e.acf.budget.includes(filterBudget))

            console.log(data);
            console.log(filterData);
            setPosts(filterData);
        }
        getData();
    }, []);

    return (
        <section>
            <h2>DATE</h2>
            <div className="portfoliogrid"> {posts.map(post => (
                <DatePost key={post.id} post={post} />
            ))}</div>
        </section>
    );
}
