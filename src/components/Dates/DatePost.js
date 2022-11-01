import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useState } from "react";

export default function DatePost({ post }) {
    let image = "https://avatars.githubusercontent.com/u/90176537?v=4";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    const [classtoggle, setClass] = useState(false);

    const toggleClass = () => {
        setClass(!classtoggle)
    }

    if (post.acf.budget[0].toLowerCase() === "none"){
        post.acf.budget[0] = "gratis";
    }
    
    return (
        <>
            <div className="card">
                <figure>
                    <img src={image} alt={post.title.rendered} />
                    <span className="tag-budget">{post.acf.budget[0]}</span>
                </figure>
                <article>
                    <div className="card-text">
                        <h3>{parse(post.title.rendered)}</h3>
                        {parse(post.excerpt.rendered)}
                    </div>
                    <svg className={classtoggle ? 'card-icon-filled card-icon' : 'card-icon'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" onClick={toggleClass}>
                        <polygon id="fill" className="card-icon-fill" points="1.78 1.66 1.76 37.85 16.25 32.46 30.74 37.85 30.74 1.66 1.78 1.66"/>
                        <path id="outline" d="M4.02,0C1.83,0,.02,1.81,.02,4l-.02,36,16-6,16,6V4c0-2.19-1.81-4-4-4H4.02Zm0,4H28v30.23l-12-4.5-12,4.5,.02-30.23Z"/>
                    </svg>
                </article>
            </div>
            <Link className="card-btn" to={`/home/${post.id}`}>Vælg</Link>
        </>
    )
}