import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function DatePost({ post }) {
    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }
    // Her er post sendt med som parameter og indholdet vises herefter
    return (
        <section className="client-row">
            <Link to={'/dateitem/' + post.id}>
                <article>
                    <h3>{parse(post.title.rendered)}</h3>
                    <div>{parse(post.excerpt.rendered)}</div>
                </article>
                <figure>
                    <img src={image} alt={post.title.rendered} />
                </figure>
            </Link>
        </section>
    )
}