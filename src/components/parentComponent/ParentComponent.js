import React, { useState, useCallback } from 'react';
import style from './ParentComponent.module.css';
import Title from '../title/Title';
import Count from '../count/Count';
import Button from '../button/Button';

export default function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <div className = { style.parentComponent }>
            <Title/>
            <Count text = "Age" count = { age }/>
            <Button handleClick = { incrementAge }>Increment Age</Button>
            <Count text = "Salary" count = { salary }/>
            <Button handleClick = { incrementSalary }>Increment Salary</Button>
        </div>
    );
}
