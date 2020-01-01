# AG - Cumulative Flow

> The AG Cumulative Flow is a simple component written in React + Typescript and its objective is doing the cumulative flow diagram renderization as easy as possible.

[![NPM](https://img.shields.io/npm/v/ag-cumulative-flow.svg)](https://www.npmjs.com/package/ag-cumulative-flow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i ag-cumulative-flow
```

ou 

```bash
yarn add ag-cumulative-flow
```

## Usage

```tsx
import * as React from 'react'

import CFD from 'ag-cumulative-flow'

class Example extends React.Component {
  render () {

    const cumulativeFlowData = {
      Backlog: [{
        x: 1570503600, y: 2
      }],
      Done: [{
        x: 1570417200, y: 1
      }]
    };

    return (
      <CFD data={cumulativeFlowData}/>
    )
  }
}
```

The cumulativeFlowData constant must have an object as the value, where the attributes is going to be the KanBan lanes and the 'x' must be the date in timestamp format and the 'y' the quantity

## License

GNU © [AG Cumulative Flow](https://github.com/valentim/ag-cumulative-flow)
