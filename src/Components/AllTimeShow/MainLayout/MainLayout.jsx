import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;
