import React, { Component } from "react";

import {Line } from 'react-chartjs-2';

const data = {
    labels: [''],
    datasets: [
        {
          label: '# of Retweets for top 100',
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(50, 136, 237, 1)',
          data: [60, 40, 20, 0],
          fill: false,
        }
    ]
};

export default class LineChart extends Component {
    render( ){ 
        return (
            <div>
          <Line
              data={data}
              options={{ maintainAspectRatio: false }}
          />
          </div>
        )
    }
}