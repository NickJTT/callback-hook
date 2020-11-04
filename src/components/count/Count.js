import React from 'react';

export default React.memo(function Count({ text, count }) {
    console.log(`Rendering ${ text }`);
    return <p>{ text }: { count }</p>;
});
