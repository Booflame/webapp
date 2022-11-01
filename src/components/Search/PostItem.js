import parse from "html-react-parser";

export default function PostItem({ post }) {
    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
        </article>
    );
}