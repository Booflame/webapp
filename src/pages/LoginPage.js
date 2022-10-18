import './login.css';
export default function LoginPage(){
    return(
        <>
            <section className="container">
                <form>
                    <div>
                        <label className="form-label" htmlFor="Email" name="email">Email</label>
                        <input className="form-input" id="Email" type="email" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" id="password" type="password" />
                    </div>
                    <button className="form-btn">Login</button>
                </form>
            </section>
        </>
    )
}