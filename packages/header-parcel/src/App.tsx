import { useEffect } from 'react';
import './App.css'
import Header from './components/Header/Header'

function App() {
  useEffect(() => {
  console.log("HEADER MOUNT");
  return () => console.log("HEADER UNMOUNT");
}, []);
  return (
    <>
      <Header />
    </>
  )
}

export default App
