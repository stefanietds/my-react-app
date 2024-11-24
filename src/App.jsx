import TextField from "@mui/material/TextField";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="svg-container">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col-label">
                <label htmlFor="name">Nome</label>
              </div>
              <div className="col-input">
                <input></input>
              </div>
            </div>

            <div className="row">
              <div className="col-label">
                <label htmlFor="age">Idade</label>
              </div>
              <div className="col-input">
                <input></input>
              </div>
            </div>

            <div className="row">
              <div className="col-label">
                <label htmlFor="read">Read</label>
              </div>
              <div className="col-input">
                <input></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
