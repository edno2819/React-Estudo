import './App.css';
import Navbar from './componets/Navbar';
import Header from './componets/Header'
import Body from './componets/Body';

import ThemeProvider from './context/theme'


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <Header />
        <Body />
      </ThemeProvider>

    </div>
  );
}

export default App;
