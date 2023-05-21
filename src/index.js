import { ThemeProvider } from 'contexts/Theme';
import RootNavigation from './navigation/RootNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;