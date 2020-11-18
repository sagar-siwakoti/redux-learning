import React from 'react';
import {connect} from "react-redux";
import {buyExample} from "../redux";

function ExampleContainer(props) {
    return (
        <div>
            <h2>Number of example feature-{props.numOfExample}</h2>
            <button onClick={props.buyExample}>Buy Example</button>
        </div>
    );
}
const mapStateToProps = state=>{
    return{
        numOfExample: state.example.numOfExample,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyExample:()=>dispatch(buyExample())
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ExampleContainer);