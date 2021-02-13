import React, { useState } from 'react';
import MyGoals from '../components/MyGoals';

const MyGoalsContainer: React.FC = () => {
    const [goals, setGoals] = useState([]);
    return (
        <React.Fragment>
            <MyGoals goals={goals} />
        </React.Fragment>
    )
}

export default MyGoalsContainer;