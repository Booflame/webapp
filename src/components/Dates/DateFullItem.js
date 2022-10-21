import parse from "html-react-parser";

export default function DateFullItem({ post }) {

    return (
        <section className="client-row">
            <article>
                <h3 >{parse(post.title.rendered)}</h3>
                <div>{parse(post.content.rendered)}</div>
            </article>
        </section>
    );
}