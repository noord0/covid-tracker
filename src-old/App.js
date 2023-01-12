import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState(0);

  async function getCovidInfo() {
    let fetchedData = await fetch("https://api.covid19api.com/summary");
    const jsonData = await fetchedData.json();
    if (jsonData.Message === "Caching in progress") return 0;
    return jsonData;
  }

  useEffect(() => {
    // getCovidInfo().then((value) => {
    //   setTest(value);
    // });
    setData(require("./data.json"));
  }, []);

  return (
    <div className="App">
      {/* <CountryCard data={data}></CountryCard> */}
      <Home data={data}></Home>
    </div>
  );
}

export default App;
