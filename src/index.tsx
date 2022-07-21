import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { ContextProvider } from './context/ContextProvider';

import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';

import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Router>
        <ContextProvider>
            <Header />
            <App />
            <Footer />
        </ContextProvider>
    </Router>
);
