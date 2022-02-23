const PersonQty = () => {
    return (
        <div class="input-area person-qty-container">
            <label class="input-area-text" for="bill">Number of people</label>

            <div className="input-container d-flex align-items-center">
                <img src="./images/icon-person.svg" alt="" className="input-icon" />
                <input type="number" name="bill" id="bill" class="form-input" placeholder="234" />
            </div>
        </div>
    );
}

export default PersonQty;