import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [dataBase, setDataBase] = useState<string>();

  useEffect(() => {
    fetch('/api').then(
      response => response.json(),
    ).then(
      data => {
        setDataBase(data);
      },
    );
  }, []);

  return (
    <div>
      🧸
      {(dataBase)}
    </div>
  );
};

export default App;
