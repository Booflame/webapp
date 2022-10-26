import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function DatePost({ post }) {
    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }
    // Her er post sendt med som parameter og indholdet vises herefter
    return (
        <div className="card">
            <figure>
                <img src={image} alt={post.title.rendered} />
            </figure>
            <article>
                <div>
                    <h3>{parse(post.title.rendered)}</h3>
                    {parse(post.excerpt.rendered)}
                </div>
                <img className="card-icon" src="/images/savee.svg" alt="save icon" />
            </article>
            
            <Link to={'/dateitem/' + post.id}></Link>
        </div>
    )
}