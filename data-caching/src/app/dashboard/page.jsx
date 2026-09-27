import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {
    return (
        <div>
            <h2>Dahsboard Page</h2>
            <Counter></Counter>
            <ul>
                <li>Dahsboard item 1</li>
                <li>Dahsboard item 2</li>
                <li>Dahsboard item 3</li>
            </ul>
            
        </div>
    );
};

export default DashboardPage;