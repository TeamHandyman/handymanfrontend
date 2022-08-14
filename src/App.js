//import logo from './logo.svg';
import './App.css';
import {Login, Dashboard} from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
	return (
		<div>
			<BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App