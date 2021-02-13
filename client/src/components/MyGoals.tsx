import React from 'react';
import GoalCard from './GoalCard';

interface Goal {
    title: string
}

interface Props {
    goals: Array<Goal>
}

const MyGoals: React.FC<Props> = ({goals}) => {
    return (
    <React.Fragment>
        <h2>My Goals</h2>
        {goals.map(goal => <GoalCard title={goal.title} />)}
    </React.Fragment>
    );
}

export default MyGoals;