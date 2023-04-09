import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const DemoColumn = () => {
  const data = [
    {
      action: '浏览网站',
      pv: 250000,
    },
    {
      action: '放入购物车',
      pv: 200000,
    },
    {
      action: '支付订单',
      pv: -200000,
    },
    {
      action: '完成交易',
      pv: -250000,
    },
  ];
  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    color: ({ action }) => {
      if(action === '浏览网站'){
        return '#219F94';
      }
      if(action === '放入购物车'){
        return '#219F94';
      }
      if(action === '支付订单'){
        return 'red';
      }
      if(action === '完成交易'){
        return 'rgb(178, 30, 30);';
      }
      return 'rgb(178, 30, 30);';
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn
// ReactDOM.render(<DemoColumn />, document.getElementById('container'));