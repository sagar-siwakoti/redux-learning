import './App.css';
import CakeContainer from "./components/CakeContainer";
import React from "react";
import {Provider} from "react-redux"
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ExampleContainer from "./components/exampleFeature";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ItemContainer cake/>
                <ItemContainer />
                <HooksCakeContainer/>
                <CakeContainer/>
                <IceCreamContainer/>
                <ExampleContainer/>
                <NewCakeContainer/>

            </div>
        </Provider>
    );
}

export default App;
