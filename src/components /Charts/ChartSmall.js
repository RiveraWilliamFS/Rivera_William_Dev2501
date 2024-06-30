import React from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 6000,
    pv: 2200,
    amt: 3000,
  },
  {
    name: 'Febuary',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ChartSmall = ({ chartSmall }) => {
  return (
    <article style={styles.card}>
      <h1 style={styles.h1}>{chartSmall.chartHeader}</h1>
      <AreaChart
        width={600}
        height={100}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </article>
  );
};

const styles = {
  card: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'white',
    margin: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  h1: {
    borderBottom: '1px solid #474044',
    padding: '1%',
  },
};

export default ChartSmall;
