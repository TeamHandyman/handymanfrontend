//import logo from './logo.svg';
import './App.css';
import {Login, Dashboard} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App