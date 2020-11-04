import React from 'react';
import style from './App.module.css';
import ParentComponent from './components/parentComponent/ParentComponent';

export default function App() {
  return (
    <div className = { style.app }>
      <ParentComponent/>
    </div>
  );
}
