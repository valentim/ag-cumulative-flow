import React, { Component } from "react";
import CFDContent from "./CFDContent";

interface CumulativeFlowDataProps {
    data: any;
}

export default class CFD extends Component<CumulativeFlowDataProps> {
    render() {
        return (
            <CFDContent data={this.props.data} />
        );
    }
}
