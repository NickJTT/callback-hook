import React from 'react';

export default React.memo(function Button({ handleClick, children }) {
    console.log(`Rendering button for the "${ children }" action`);
    return <button onClick = { handleClick }>{ children }</button>;
});
