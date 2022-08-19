import './saleschart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan ',
    revenue : 400000,
    
  },
  {
    name: 'Feb',
    revenue : 1000000,
  },
  {
    name: 'Mar',
    revenue : 600000,
  },
  {
    name: 'Apri',
    revenue : 300000,
  },
  {
    name: 'May',
    revenue : 400000,
  },
  {
    name: 'Jun',
    revenue : 350000,
  },
  {
    name: 'Jul',
    revenue : 700000,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Monthly Revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart width={730} height={250} data={data}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#242424" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#242424" stopOpacity={0}/>
    </linearGradient> */}
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#e2b808" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#e2b808" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  {/* <Area type="monotone" dataKey="clients" stroke="#242424" fillOpacity={1} fill="url(#colorUv)" /> */}
  <Area type="monotone" dataKey="revenue" stroke="#e2b808" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
