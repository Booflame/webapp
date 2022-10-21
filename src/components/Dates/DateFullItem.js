export default function DateFullItem({ post }) {

    return (
        <section className="client-row">
            <article>
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </article>
        </section>
    );
}