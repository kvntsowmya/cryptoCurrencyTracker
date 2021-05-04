import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCurrencyData
  return (
    <div className="currency-container">
      <div className="currency-logo">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="cointypes-container">
        <p className="usd-coin">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
