import "./App.css";
import { NavigationBar, HomePageGrid } from "./components";

function App() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.`;
  console.log(text);

  return (
    <div className="App flex flex-col items-center justify-center gap-5">
      <NavigationBar />
      <HomePageGrid />
    </div>
  );
}

export default App;
