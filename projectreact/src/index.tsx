import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import GeneralPerson from './person';
import { ButtonGroup } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import {GeneralGroup} from './generalGroup';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ButtonGroup size="large" component={Link} className='link1' to={'/api/group'} >
          <InsertLinkIcon></InsertLinkIcon>     Group
        </ButtonGroup >

        <ButtonGroup component={Link} className='link2' to={'/api/person'}>
          <InsertLinkIcon></InsertLinkIcon>     Person
        </ButtonGroup >

        <Routes >
          <Route path="/api/group/" element={<GeneralGroup />} />
          <Route path="/api/person/" element={<GeneralPerson />} />
          <Route path='*' element={<GeneralGroup />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<App />);

export default App;



