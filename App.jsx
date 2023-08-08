import './App.css';
import Basketball from './Basketball/Basketball';
import Football from './Football/Football';
import Hockey from './Hockey/Hockey';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>

<Routes>
<Route path='/' element={<Main/>}></Route>
<Route path='/football' element={<Football/>}></Route>
<Route path='/basketball' element={<Basketball/>}></Route>
<Route path='/hockey' element={<Hockey/>}></Route>

</Routes>
    </>
  );
}

export default App;
