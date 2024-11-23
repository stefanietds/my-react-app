import SvgComponent1 from "./componentes/comp1";
import SvgComponent2 from "./componentes/comp2";
import SvgComponent3 from "./componentes/comp3";
import SvgComponent4 from "./componentes/comp4";

import "./index.css";

const App = () => {

  return (
    <div>
      <div className="svg-container">
        <SvgComponent1 />
        <SvgComponent2 />
        <SvgComponent3 />
        <SvgComponent4 />
      </div>
    </div>
  );
};

export default App;
