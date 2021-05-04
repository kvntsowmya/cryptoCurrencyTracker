import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoader: true,
    cryptoCurrenciesData: [],
  }

  componentDidMount() {
    this.renderCryptocurrencyList()
  }

  renderCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({
      isLoader: false,
      cryptoCurrenciesData: updatedData,
    })
  }

  renderCryptocurrency = () => {
    const {cryptoCurrenciesData} = this.state

    return (
      <div className="cryptocurrency-container">
        <div className="cryptoCurrency-list">
          <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
        </div>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div className="bg-container">
        {isLoader ? (
          <div testid="loader">
            <Loader
              type="Rings"
              color="#ffffff"
              height={80}
              width={80}
              className="spinner"
            />
          </div>
        ) : (
          <div>
            <h1>Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
            />
            {this.renderCryptocurrency()}
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
