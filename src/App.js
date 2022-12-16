import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Ticker from "./components/TickerComponent/TickerComponent";
import Projects from "./components/Projects/Projects";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <Ticker />
      <Projects />
      <Summary />
      <Experience />
    </div>
  );
};

export default App;
