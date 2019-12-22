import { Component } from "react";
const Graph = require('rickshaw').Graph;

interface HoverDetailProps {
    graph: any;
}

export default class HoverDetail extends Component<HoverDetailProps> {
    constructor(hoverDetailProps: HoverDetailProps) {
        super(hoverDetailProps);

        new Graph.HoverDetail({ graph: hoverDetailProps.graph, xFormatter: (x: number) => {
            const d = new Date(x * 1000);
            const year = d.getFullYear();
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;

            return [year, month, day].join('-');
        } });
    }
}