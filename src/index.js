import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import {
    Chart as ChartJS, ArcElement, Legend, Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(ArcElement, Legend, Tooltip, CategoryScale, LinearScale, PointElement, LineElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
