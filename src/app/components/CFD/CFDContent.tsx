import React, { Component } from "react";
import Legend from "./Graph/Legend/Legend";
import HoverDetail from "./Graph/HoverDetail";
import "./CFDContent.css";

const Rickshaw = require('rickshaw');

interface CumulativeFlowDataProps {
    data: any;
    graph?: any;
}

export default class CFDContent extends Component<CumulativeFlowDataProps> {
        private series: any[] = [];

        constructor(cumulativeFlowData: CumulativeFlowDataProps) {
            super(cumulativeFlowData);

            this.createSeries(cumulativeFlowData.data);
        }

        private createSeries(cumulativeFlowData: any) {
            const palette = new Rickshaw.Color.Palette();
            
            Object.keys(cumulativeFlowData).forEach(key => {
                this.series.push({
                    data: cumulativeFlowData[key],
                    name: key,
                    color: palette.color()
                });
            });
        }

        private getGraph() {
            return () => {
                const graph = new Rickshaw.Graph({
                    element: document.querySelector("#cumulative"),
                    renderer: 'area',
                    stroke: true,
                    series: this.series
                });

                graph.render();
                new HoverDetail({graph});

                return graph;
            };
        }

        render() {
            const graph = this.getGraph();
            
            return (
                <div id="legend_container">
                    <Legend graph={graph} />
                </div>
            );
        }
}
