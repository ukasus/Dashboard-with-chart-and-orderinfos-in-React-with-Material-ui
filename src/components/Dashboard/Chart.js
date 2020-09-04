import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Title from './Title';


function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('0',),

  createData('01/07/2020', 20000),
  createData('02/07/2020', 30000),
  createData('03/07/2020', 22500),
  createData('04/07/2020', 45000),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title style="text-align:'center'">Order Amount</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis type="number" domain={[0 + 5000,]} stroke={theme.palette.text.secondary} >

          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}