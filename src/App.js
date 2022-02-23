import React from 'react';
import './styles/App.css';
import Bill from './components/BillComponent';
import Buttons from './components/ButtonsComponent';
import PersonQty from './components/PersonQtyComponent';
import ResetBtn from './components/ResetBtn';

function App() {
  return (
    <main className="App">
      <div className="splitter-container">
        <p className="splitter-text text-uppercase mb-0">
          Spli
        </p>
        <p className="splitter-text text-uppercase">
          TTER
        </p>
      </div>

      <div className="container">
        <div className="calculator-frame">
          <div className="row">
            <div className="col-12 col-lg-5">
              <form action="#" className="input-data-form">
                <Bill />

                <Buttons />

                <PersonQty />
              </form>
            </div>
            <div className="col-12 col-lg-7">
              <div className="lateral-frame d-flex flex-column justify-content-between">
                <div>
                  <div className="results-container d-flex justify-content-between align-items-center">
                    <div>
                      <p class="text-white text-capitalize lateral-frame-text-title mb-1">
                        Tip Amount
                      </p>
                      <p class="text-lowercase lateral-frame-text-title mb-0">
                          /person
                      </p>
                    </div>

                    <span className="tip-amount-result">$4.27</span>

                  </div>

                  <div className="results-container second d-flex justify-content-between align-items-center">
                    <div>
                      <p class="text-white text-capitalize lateral-frame-text-title mb-1">
                        Total
                      </p>
                      <p class="text-lowercase lateral-frame-text-title mb-0">
                          /person
                      </p>
                    </div>

                    <span className="total-result">$4.27</span>

                  </div>
                  
                </div>
                <ResetBtn/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
