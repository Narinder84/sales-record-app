/** @format */

import React from 'react';

import './App.scss';
import NavBar from './components/navbar-component/navbar-component.jsx';
import SalesRecord from './pages/sales-record/sales-record-component';

function App() {
	return (
		<>
			<NavBar />
			<SalesRecord />
		</>
	);
}

export default App;
