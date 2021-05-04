import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props

  return (
    <>
      <div className="currency-header">
        <p>Coin Type</p>
        <div className="cointypes-container">
          <p className="usd-coin">USD</p>
          <p>EURO</p>
        </div>
      </div>
      {cryptoCurrenciesData.map(currency => (
        <CryptocurrencyItem cryptoCurrencyData={currency} key={currency.id} />
      ))}
    </>
  )
}

export default CryptocurrenciesList
