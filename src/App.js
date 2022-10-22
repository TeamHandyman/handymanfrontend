//import logo from './logo.svg';
import './App.css';
import {Login} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Sales from './pages/sales/Sales';
import Workers from './pages/workers/Workers';
import Clients from './pages/clients/Clients';
import Ticket from './pages/ticket/Ticket'
import Workersingle from './pages/workersingle/Workersingle';
import Jobs from './pages/jobs/Jobs'
import Addjob from './pages/jobs/Addjob';

const App = () => {
  //const user = localStorage.getItem("token");
	return (
		<div>

		 <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Login />} />
			        <Route path="/Home" element={<Home/>} />
              <Route path="workers">
                <Route index element={<Workers />}/>
                <Route path=":workerId" element={<Workersingle />} />
              </Route>
              <Route path="clients">
                <Route index element={<Clients />}/>
                <Route path=":clientId" element={<Workersingle />} />
              </Route>
              <Route path="ticket">
                <Route index element={<Ticket />}/>
                {/* <Route path=":clientId" element={<Ticketsingle />} /> */}
              </Route>
              <Route path="sales">
                <Route index element={<Sales />}/>
                {/* <Route path=":workerId" element={<Workersingle />} /> */}
              </Route>
              <Route path="jobs">
                <Route index element={<Jobs />}/>
                {/* <Route path=":workerId" element={<Workersingle />} /> */}
              </Route>
              <Route path="jobs/addjob">
                <Route index element={<Addjob/>}/>
                {/* <Route path=":workerId" element={<Workersingle />} /> */}
              </Route>
             </Route>
          </Routes> 
        </BrowserRouter>     
		</div>
	)
}

export default App