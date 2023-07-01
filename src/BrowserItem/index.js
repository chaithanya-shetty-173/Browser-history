import './index.css'

const BrowserItem = props => {
  const {details, clickDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onClickDelete = () => {
    console.log(id)
    clickDelete(id)
  }
  return (
    <li className="history-item">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="info-container">
        <img className="logo" alt="domain logo" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <img
        type="button"
        className="deleteIcon"
        onClick={onClickDelete}
        data-testid="delete"
        alt="delete"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
      />
    </li>
  )
}

export default BrowserItem
