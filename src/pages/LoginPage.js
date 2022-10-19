import './login.css';
export default function LoginPage(){
    return(
        <>
            <section className="container">
                <h1>Building better forms input</h1>
                <form className='login-form'>
                    <div className='input-wrapper'>
                        <input className="form-input" id="firstname" type="firstname" placeholder='firstname'/>
                        <label className="form-label" htmlFor="firstname" name="firstname">firstname</label>
                    </div>
                    <div className='input-wrapper'>
                        <input className="form-input" id="lastname" type="lastname" placeholder='lastname'/>
                        <label className="form-label" htmlFor="lastname" name="lastname">lastname</label>
                    </div>
                    <div className='input-wrapper'>
                        <input className="form-input" id="Email" type="email" placeholder='Email'/>
                        <label className="form-label" htmlFor="Email" name="email">Email</label>
                    </div>
                    <div className='input-wrapper'>
                        <input className="form-input" id="password" type="password" placeholder='password' />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>
                    <button className="form-btn">Login</button>
                </form>
            </section>
        </>
    )
}