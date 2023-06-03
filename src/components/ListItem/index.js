import './index.css'

const ListItem = props => {
  const {Details, onDataIdFeteched} = props
  const {id, name, isVisited} = Details
  const Change = isVisited ? 'list-button-style1' : 'list-button-style'
  const Text = isVisited ? <p>Visited</p> : 'Visit'
  console.log(isVisited)
  const onClickData = () => {
    onDataIdFeteched(id)
  }

  return (
    <li className="list-container">
      <p className="list-para-style">{name}</p>
      <button className={`${Change}`} type="button" onClick={onClickData}>
        {Text}
      </button>
    </li>
  )
}
export default ListItem
