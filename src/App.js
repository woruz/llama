import logo from './logo.svg';
import './App.css';
import FormTwo from './component/FormTwo';
import Sidebar from './component/Sidebar';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/pages/NotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormTwo />}/>
        <Route path="/projects" element={<NotFound />}/>
        <Route path="/templates" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;