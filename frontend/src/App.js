import './App.css';
import Create from './component/Create';
import Navbar from './component/Navbar';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Read from './component/Read';
import Update from './component/Update';
function App() {
  return (
   <Router>
    <Navbar/>
<Routes>
  <Route path="/" element={<Create/>} />
  <Route path="/all" element={<Read/>} />
  <Route path="/:id" element={<Update/>} />
</Routes>
   </Router>
    
  );
}

export default App;
