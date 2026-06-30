
import { Provider } from "react-redux";
import "./styles.css";
import Body from "./components/Body";

function App(){
  return(
    <provider store={appStore}>
      <Body/>
    </provider>
  );
};

export default App;