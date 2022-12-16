import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Ticker from "./components/TickerComponent/TickerComponent";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <Ticker />
      <Projects />
    </div>
  );
};

export default App;
