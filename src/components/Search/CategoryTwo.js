import { useState, useEffect } from "react";
import "../../pages/search.css"
import "./PostItem"
import PostItem from "./PostItem";

/* Laura */
/* Her fetcher jeg data fra vores headless wordpress CMS og udvælger enkelte posts ved targeting af deres ID i linket  */

export default function SearchPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts/?_embed&include=17,14&;per_page=100");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }
        getData();
    }, []);


    return (
        <>
            <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
            </section>
        </>
    )
}