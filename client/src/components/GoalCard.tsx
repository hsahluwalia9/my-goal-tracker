import React from 'react';

interface Props {
    title: string
}

const GoalCard: React.FC<Props> = ({title}) => {
    return (
        <React.Fragment>
            <span>{title}</span>
            <br />
            <br />
        </React.Fragment>
    )
}

export default GoalCard;