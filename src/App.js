import './App.css';
import CakeContainer from "./components/CakeContainer";
import React from "react";
import {Provider} from "react-redux"
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ExampleContainer from "./components/exampleFeature";
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <HooksCakeContainer/>
                <CakeContainer/>
                <IceCreamContainer/>
                <ExampleContainer/>
            </div>
        </Provider>
    );
}

export default App;
