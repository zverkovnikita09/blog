import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';

render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter >,
  document.getElementById('root')
)