import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss'
import Main from './components/Main/Main';

const App: React.FC = () => {
  return <Routes>
    <Route path='/' element={<Main />} />
  </Routes>
}

export default App;