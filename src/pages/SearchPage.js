import BotNav from "../components/BottomNavigation/BotNav"
import Header from "../components/Header/Header"
import { useState, useEffect } from "react";
import PostItem from "../components/PostItem"
import "./search.css"

export default function SearchPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch("https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts?_embed&per_page=100");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }
        getData();
    }, []);


    return (
        <>
            <Header></Header>
            <section className="grid-container">
                {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                ))}
                <BotNav />
            </section>
        </>
    )
}