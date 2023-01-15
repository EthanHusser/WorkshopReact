import './Coins.css'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
      <p>{props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={props.coins.image} alt="" />
        <p><b>{props.coins.symbol.toUpperCase()}</b></p>
      </div>
      <p>{props.coins.current_price.toLocaleString()} <b>$</b></p>
      <p>{props.coins.price_change_percentage_24h.toPrecision(2)} <b>%</b></p>
      <p className='hide-mobile'>{props.coins.total_volume.toLocaleString()} <b>$</b></p>
      <p className='hide-mobile'>{props.coins.market_cap.toLocaleString()} <b>$</b></p>
    </div>
  )
}

export default CoinItem
