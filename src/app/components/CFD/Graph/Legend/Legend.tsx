import React, { Component } from "react";
import Toggle from "./Behavior/Toggle";
import Highlight from "./Behavior/Highlight";
import "./Legend.css";

const Graph = require('rickshaw').Graph;

interface LegendProps {
    graph: any;
}

export default class Legend extends Component<LegendProps> {
    componentDidMount() {
        const legend = new Graph.Legend( {
            graph: this.props.graph,
            element: document.getElementById('legend')
        } );

        new Toggle({graph: this.props.graph, legend});
        new Highlight({graph: this.props.graph, legend});
    }

    render() {
        return (
            <div id="legend"></div>
        );
    }
}