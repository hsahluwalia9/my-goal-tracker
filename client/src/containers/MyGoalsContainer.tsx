import React, { useState, useEffect } from 'react';
import MyGoals from '../components/MyGoals';

const MyGoalsContainer: React.FC = () => {
    const [goals, setGoals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/goals', {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
          }),
        })
          .then((res) => res.json())
          .then((response) => {
            setGoals(response);
          })
          .catch((error) => console.log(error));
      }, []);
    return (
        <React.Fragment>
            <MyGoals goals={goals} />
        </React.Fragment>
    )
}

export default MyGoalsContainer;