import store from "store";
import { Provider } from "react-redux";
import FormContainer from "components/FormContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FormContainer />
      </Provider>
    </div>
  );
}

export default App;
