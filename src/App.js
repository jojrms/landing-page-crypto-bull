import LandingPage from "./components/pages/LandingPage";
import { LanguageProvider } from "./language.context";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LandingPage/>
      </div>  
    </LanguageProvider>
    
  );
}

export default App;
