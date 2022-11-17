import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Form from './components/Form'
import List from './components/List'
import EditForm from './components/EditForm';
import OneChore from './components/OneChore';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/chores/new" element={<Form />}/>
          <Route path='/' element={<List />}/>
          <Route path='/chores/edit/:id' element={<EditForm />}/>
          <Route path='/chores/:id' element={<OneChore />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
