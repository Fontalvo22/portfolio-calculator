const Buttons = () => {
    return(

    <div class="input-area buttons">
        <label class="input-area-text text-capitalize" for="bill">Select tip %</label>

        <div className="input-container d-flex align-items-center justify-content-between ps-0">

            <button class="input-btn mt-0">5%</button>
            <button class="input-btn mt-0">10%</button>
            <button class="input-btn mt-0">15%</button>


            <button class="input-btn">25%</button>
            <button class="input-btn">50%</button>
            <button class="input-btn custom">Custom</button>
        </div>
    </div>
    )
}

export default Buttons;