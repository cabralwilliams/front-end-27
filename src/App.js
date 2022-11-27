import logo from './logo.svg';
import './App.css';
import AppBanner from './components/AppBanner';
import Spinner from './components/Spinner';
import FooterBanner from './components/FooterBanner';
import Home from './pages/Home';
import ThemeSelector from './pages/ThemeSelector';
import { store } from './utils/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// <Spinner opacity={0.85} spinnerSize={15} variant={'h3'} message={'Activating'} themeColor={'yellow'} themeStrength={800}></Spinner>

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<AppBanner pageTitle={'Home'}></AppBanner>
				<Router>
					<Routes>
						<Route path='/front-end-27' element={<Home />} />
						<Route path='/front-end-27/select_theme' element={<ThemeSelector />} />
						<Route path='*' element={<Home />} />
					</Routes>
				</Router>
				<FooterBanner themeColor={'blueGrey'} themeStrength={500}></FooterBanner>
			</div>
		</Provider>
	);
}

export default App;
