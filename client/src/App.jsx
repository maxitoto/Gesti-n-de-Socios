import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Cliente!!</h1>
            {data ? <p>{data.message}</p> : <p>Loading...</p>}
        </div>
    );
}

export default App;
