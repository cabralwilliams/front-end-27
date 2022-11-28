import React, { useState, useEffect } from 'react';
import AppBanner from './AppBanner';
import FooterBanner from './FooterBanner';
import Home from '../pages/Home';
import ThemeSelector from '../pages/ThemeSelector';
import { useSelector } from 'react-redux';

function AppWrapper() {
    const appState = useSelector(state => state);
	const [currentPath, setCurrentPath] = useState(appState.activePath);
	const [currentPage, setCurrentPage] = useState(appState.activePage);

	useEffect(() => {
		setCurrentPage(appState.activePage);
		setCurrentPath(appState.activePath);
	}, [appState.activePage, appState.activePath]);

    return (
        <div className='App'>
            <AppBanner pageTitle={currentPage}></AppBanner>
            {currentPath === '/' && <Home />}
            {currentPath === '/select_theme' && <ThemeSelector />}
            <FooterBanner themeColor={'blueGrey'} themeStrength={500}></FooterBanner>
        </div>
    )
}

export default AppWrapper