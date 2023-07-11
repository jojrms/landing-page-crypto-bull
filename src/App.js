import Header from "./components/pages/Header";
import { LanguageProvider } from "./language.context";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header/>
      </div>  
    </LanguageProvider>
    
  );
}

export default App;
