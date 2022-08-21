//import logo from './logo.svg';
import './App.css';
import {Login, Dashboard} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Sales from './pages/sales/Sales';
import Workers from './pages/workers/Workers';
import Workersingle from './pages/workersingle/Workersingle';

const App = () => {
  //const user = localStorage.getItem("token");
	return (
		<div>

		 <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="workers">
                <Route index element={<Workers />}/>
                <Route path=":workerId" element={<Workersingle />} />
              </Route>
              <Route path="sales">
                <Route index element={<Sales />}/>
                {/* <Route path=":workerId" element={<Workersingle />} /> */}
              </Route>
             </Route>
          </Routes> 
        </BrowserRouter>     
		</div>
	)
}

export default App