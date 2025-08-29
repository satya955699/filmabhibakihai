import Home from './component/home.jsx';
import Name from './component/name.jsx';
import Join from './component/join.jsx';
import Review from "./component/review.jsx"
import Contact from "./component/contact.jsx"
import Mylist from "./component/mylist.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
  return (
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<Home/>} />
        <Route path='/join' element={<Join/>}/>
        <Route path='/Review' element={<Review/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Mylist'element={<Mylist/>}/>
      </Routes>
      </div>
    </Router>
    )
}
export default App;