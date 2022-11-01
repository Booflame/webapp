import parse from "html-react-parser";
import { Link } from "react-router-dom";

// Freja & Nichlas 
export default function DateFullItem({ post }) {

    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <>
            <article className="big-card">
                <h2 >{parse(post.title.rendered)}</h2>
                <img src={image} alt={post.title.rendered}/>
                <div>{parse(post.content.rendered)}</div>
            </article>
            <Link className="big-card-btn" to={`/home`}>Afslut</Link>
        </>
    );
}