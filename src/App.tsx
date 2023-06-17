import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import { useTheme } from './theme/useTheme';

const App: React.FC = () => {
 const {theme, toggleTheme} = useTheme();

  return <div className={`app ${theme}`}>
    <button onClick={toggleTheme}>Change Theme</button>
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  </div>
}

export default App;