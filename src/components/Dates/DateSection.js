
import DatePost from "./DatePost";
import { useEffect, useState } from "react";

export default function DateSection() {
    const [posts, setPosts] = useState([]);
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts?_embed");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }

        getData();
    }, []);

    return (
        <section>
            <h2>DATE</h2>
            <div className="portfoliogrid "> {posts.map(post => (
                <DatePost key={post.id} post={post} />
            ))}</div>
        </section>
    );
}
