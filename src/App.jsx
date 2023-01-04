import "./App.css";
import { NavigationBar, HomePageGrid } from "./components";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center gap-5">
      <NavigationBar />
      <HomePageGrid />
    </div>
  );
}

export default App;
