import { useEffect, useState } from "react";
import DateFullItem from "./DateFullItem";


// Freja & Nichlas
export default function DateItemComponent(props) {
    const [post, setPost] = useState(undefined);

    useEffect(() => {
        if (props.id === undefined) return
        async function getData(id) {
            const res = await fetch(`https://webappindhold.frejavangilst.com/wp-json/wp/v2/posts/${id}?_embed&per_page=100`);
            const data = await res.json();
            setPost(data);
        }

        getData(props.id);
    }, [props.id]);

    if (props.id === undefined) return <section>id parameter er ikke angivet</section>
    if (post === undefined) return <section>post er ikke angivet</section>

    return (
        <section>
            <h2>Portfolio</h2>
            <DateFullItem key={post.id} post={post} />
        </section>

    );
}
