
import AlertButton from "./alert";
import ConditionalRendering from "./condition";
import Itemslist from "./list";
import Increment from "./state";

import HelloWorld from "./Welcome";


function App() {
  return (
    <div>
      
      <div>
        <HelloWorld />
      </div>
      
      
      

      <div>
        <h1>state</h1>
        <Increment/>
      </div>

      <div>
        <AlertButton/>
      </div>

      <div>
        <ConditionalRendering/>
      </div>

      <div>
        <Itemslist/>
      </div>



      
    </div>
  );
}

export default App;
