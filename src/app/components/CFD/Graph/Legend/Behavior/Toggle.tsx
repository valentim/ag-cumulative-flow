import { Component } from "react";
const Rickshaw = require('rickshaw');

interface ToggleProps {
    graph: any;
    legend: any;
}

export default class Toggle extends Component<ToggleProps> {

    constructor(toggleProps: ToggleProps) {
        super(toggleProps);

        new Rickshaw.Graph.Behavior.Series.Toggle( {
            graph: toggleProps.graph,
            legend: toggleProps.legend
        } );
    }

}