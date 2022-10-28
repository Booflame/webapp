import { useState, useEffect } from "react";
import "../../pages/search.css"
import "./PostItem"
import PostItem from "./PostItem";

export default function SearchPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts/?include=17,14&;per_page=100");
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