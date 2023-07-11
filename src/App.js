import AboutUs from "./components/pages/AboutUs";
import Header from "./components/pages/Header";
import NFTCategories from "./components/pages/NFTCategories";
import Presentation from "./components/pages/Presentation";
import { LanguageProvider } from "./language.context";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Presentation/>
        <AboutUs/>
        <NFTCategories/>
      </div>  
    </LanguageProvider>
    
  );
}

export default App;
