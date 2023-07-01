import {Component} from 'react'
import './index.css'
import BrowserItem from '../BrowserItem/index'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    this.state = {initialHistoryList: props.initialHistoryList, searchInput: ''}
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDelete = id => {
    console.log(id)
    const {initialHistoryList} = this.state
    const filteredHistoryList = initialHistoryList.filter(
      each => each.id !== id,
    )
    this.setState({initialHistoryList: filteredHistoryList})
  }

  render() {
    const {initialHistoryList, searchInput = ''} = this.state
    const filteredHistoryList = initialHistoryList.filter(each => {
      const check = each.title.toLowerCase()
      const search = searchInput.toLowerCase()
      return check.includes(search)
    })
    const isNull = filteredHistoryList.length
    console.log(searchInput)
    console.log(filteredHistoryList.length)
    return (
      <div className="page-background">
        <div className="header-container">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <div className="search-container">
            <img
              className="search-Icon"
              alt="search"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />
            <div className="lineStyle">
              <br />
            </div>
            <input
              className="searchInput"
              placeholder="Search history"
              type="search"
              defaultValue={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="body-container">
          <div className="history-container">
            <ul className="history-card">
              {filteredHistoryList.map(each => (
                <BrowserItem
                  details={each}
                  key={each.id}
                  clickDelete={this.onClickDelete}
                />
              ))}
            </ul>
            {isNull === 0 && (
              <p className="info">There is no history to show</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
