import React from 'react';

export default React.memo(function Title() {
    console.log('Rendering title');
    return <h2>useCallback Hook</h2>;
});
