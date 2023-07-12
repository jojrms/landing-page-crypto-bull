import AboutUs from "./components/pages/AboutUs";
import BrowsePossibilities from "./components/pages/BrowsePossibilities";
import Collections from "./components/pages/Collections";
import Header from "./components/pages/Header";
import NFTCategories from "./components/pages/NFTCategories";
import Presentation from "./components/pages/Presentation";
import Questions from "./components/pages/Questions";
import TheBeatBull from "./components/pages/TheBeatBull";
import { LanguageProvider } from "./language.context";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
        <Presentation/>
        <AboutUs/>
        <NFTCategories/>
        <Collections/>
        <BrowsePossibilities/>
        <TheBeatBull/>
        <Questions/>
      </div>  
    </LanguageProvider>
    
  );
}

export default App;
