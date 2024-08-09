import "./App.css";
import ChartComponent from "./components/ChartDonut";

function App() {
  const seriesData = [44, 55, 41, 17, 15];
  const labelsData = [
    "Gasolina Comum",
    "Oléo diesel Comum",
    "Etanol",
    "Gasolina aditivada",
    "Oléo diesel S-10",
  ];
  const colors = ["#323C46", "#485C70", "#0456A5", "#0F71D0", "#C4E1F8"];
  const legendPosition = "bottom";

  return (
    <div className="App">
      <header className="App-header">
        <ChartComponent
          series={seriesData}
          labels={labelsData}
          legendPosition={legendPosition}
          colors={colors}
          showPercentages={false}
        />
      </header>
    </div>
  );
}

export default App;
