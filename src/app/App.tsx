import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import 'app/styles/index.scss'
import { Suspense } from 'react';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>Change Theme</button>
    <Suspense fallback={<p>Загрузка...</p>}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </Suspense>
  </div>
}

export default App;