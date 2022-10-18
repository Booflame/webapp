export default function LoginPage(){
    return(
        <section>
            <form>
                <div>
                    <label className="form-label" htmlFor="Email" name="email">Email</label>
                    <input className="form-input" id="Email" type="email" />
                </div>
            </form>
        </section>
    )
}