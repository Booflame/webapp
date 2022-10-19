export default function Header() {
    return (
        <header>
            <div className="headerflex">

                <a className="headerimg" href="-" target="_blank" rel="noreferrer">
                    <img src="/images/notification.png" alt="Notifications button"></img>
                </a>

                <a className="headerimg" href="-" target="_blank" rel="noreferrer">
                    <img src="/images/logo.png" alt="Logo"></img>
                </a>

                <a className="headerimg" href="-" target="_blank" rel="noreferrer">
                    <img src="/images/search.png" alt="Search button"></img>
                </a>
            </div>
        </header>
    );
}