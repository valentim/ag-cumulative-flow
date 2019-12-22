import { Component } from "react";
const Rickshaw = require('rickshaw');

interface HighlightProps {
    graph: any;
    legend: any;
}

export default class Highlight extends Component {
    constructor(highlightProps: HighlightProps) {
        super(highlightProps);

        new Rickshaw.Graph.Behavior.Series.Highlight({
            graph: highlightProps.graph,
            legend: highlightProps.legend
        });
    }
}