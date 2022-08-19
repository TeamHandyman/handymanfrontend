import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    clients: 4000,
    workers: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    clients: 3000,
    workers: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    clients: 2000,
    workers: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    clients: 2780,
    workers: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    clients: 1890,
    workers: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    clients: 2390,
    workers: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    clients: 3490,
    workers: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Monthly Registrations</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#242424" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#242424" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#e2b808" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#e2b808" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="clients" stroke="#242424" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="workers" stroke="#e2b808" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
