import './Parameters.css'

export default function Parameters() {
    return (
        <section>
            <div class="switch-toggle switch-3 switch-candy">
                <input id="on" name="state-d" type="radio" checked="" />
                <label for="on" onclick="">ON</label>

                <input id="na" name="state-d" type="radio" checked="checked" />
                <label for="na" class="disabled" onclick="">N/A</label>

                <input id="off" name="state-d" type="radio" />
                <label for="off" onclick="">OFF</label>
            </div>

        </section>
    )
}


