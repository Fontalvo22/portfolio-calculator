import React from 'react';

const Bill = () => {
    
    return (
        <div class="input-area">
            <label class="input-area-text" for="bill">Bill</label>
            <div className="input-container d-flex align-items-center">
                <img src="./images/icon-dollar.svg" alt="" className="input-icon" />
                <input type="number" name="bill" id="bill" class="form-input" placeholder="234" />
            </div>
        </div>
    );
}

export default Bill;