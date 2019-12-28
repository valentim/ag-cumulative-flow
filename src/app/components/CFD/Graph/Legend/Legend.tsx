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
        const graph = this.props.graph();
        const legend = new Graph.Legend( {
            graph: graph,
            element: document.getElementById('legend')
        } );

        new Toggle({graph, legend});
        new Highlight({graph, legend});
    }

    render() {
        return (
            <div id="legend"></div>
        );
    }
}