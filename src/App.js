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
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppWrapper from './components/AppWrapper';

// <Spinner opacity={0.85} spinnerSize={15} variant={'h3'} message={'Activating'} themeColor={'yellow'} themeStrength={800}></Spinner>

function App() {
	return (
		<Provider store={store}>
			<AppWrapper />
		</Provider>
	);
}

export default App;
