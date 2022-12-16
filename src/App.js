import Header from "./components/Header/Header";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import Ticker from "./components/TickerComponent/TickerComponent";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <Ticker />
    </div>
  );
};

export default App;
