import React from 'react';
import Home from './components/Home';

export default function App(){
    return (
        <div className="min-h-screen text-gray-800 flex flex-col">
            <div className="h-full">
                <Home />
            </div>
            <footer className="bg-gray-100 text-center py-4 mt-auto">
                <a
                  href="https://www.zapt.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Made on ZAPT
                </a>
            </footer>
        </div>
    )
}