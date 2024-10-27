import { useState, useTransition } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState<any>([]);
  const [isPending, startTransition] = useTransition();
  const handleChange = (e: any) => {
    setCount(e.target.value);
    startTransition(() => {
      const arr = Array.from({
        length: 100
      }).fill(1);
      setList([...list, ...arr]);
    });
  };

  return (
    <div className='app'>
      <input type='text' onChange={handleChange} value={count} />
      <div>{count}</div>
      {isPending ? (
        <div>Loading....</div>
      ) : (
        list.map((item: number, index: number) => {
          return <p key={index}>{count}</p>;
        })
      )}
    </div>
  );
}

export default App;
