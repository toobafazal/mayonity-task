import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import '../../styles/style.css'

const DemoPie = () => {
  const data = [
    {
      type: 'Monthly Slack $4000',
      value: 40,
    },
    {
      type: 'Housing or Rent Tax Insurance $2000',
      value: 25,
    },
    {
      type: 'Monthly Debt pmt (credit card, car etc) $1000',
      value: 40,
    },
    {
      type: 'Monthly Expenses $3000',
      value: 90,
    },
    
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color:['#5b67ea','rgba(64, 78, 237, 0.35)','#9ea1c2','#219F94'],
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        //  fill: ['#219F94','rgba(64, 78, 237, 0.7)'], 
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

// ReactDOM.render(<DemoPie />, document.getElementById('container'));
export default DemoPie;