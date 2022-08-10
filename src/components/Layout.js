import React from 'react';
import NavBar from './Nav/NavBar';

export default function Layout({children}) {    
  return (
    <>
        <NavBar />
        <main>
            <div className="container">
                {children}
            </div>
        </main>
    </>
    
  )
}
