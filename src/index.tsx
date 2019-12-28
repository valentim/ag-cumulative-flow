import React, { Component } from "react";
import CFDContent from "./app/components/CFD/CFDContent";

interface CumulativeFlowDataProps {
    data: any;
}

export default class CFD extends Component<CumulativeFlowDataProps> {
    render() {
        return (
            <div id="cumulativeflow_wrapper">
                <div id="cumulative"></div>
                <CFDContent data={this.props.data} />
            </div>
        );
    }
}
