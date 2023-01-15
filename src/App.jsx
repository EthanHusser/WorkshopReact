import {useState, useEffect} from "react";
import axios from "axios"

import Coins from "./component/Coins";
import Navbar from "./component/Navbar";

function App() {

  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setCoins(response.data)
        console.log(response.data[0])
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <Coins coins={coins}/>
    </>
  );
}

export default App;
