import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { body } = await( await fetch(`/api/message`)).json();
      setData(body);
    })();
  });

  return <div>{data}</div>;
}

export default App;