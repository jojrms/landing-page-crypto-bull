import AboutUs from "./components/pages/AboutUs";
import Header from "./components/pages/Header";
import Presentation from "./components/pages/Presentation";
import { LanguageProvider } from "./language.context";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Presentation/>
        <AboutUs/>
      </div>  
    </LanguageProvider>
    
  );
}

export default App;
