
import Subscribers from "./components/Subscribers";
import {Provider} from "react-redux";
import store from "./redux/store";
import './App.css'
import Display from "./components/Display";
import View from "./components/View";
import Comments from "./components/Comments";
function App() {
  return (
      <Provider store={store} >
        <div className="App">
            <Comments />
          <Subscribers />
            <Display />
            <View />
        </div>
      </Provider>
  );
}

export default App;
