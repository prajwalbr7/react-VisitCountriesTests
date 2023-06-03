import './index.css'

const ImgListItem = props => {
  const {Details, DeteleListItem} = props
  const {imageUrl, name, id} = Details
  const onRemove = () => {
    DeteleListItem(id)
  }
  return (
    <li className="list-part2-container">
      <img src={imageUrl} alt="thumbnail" className="list-part2-img-sizing" />
      <div className="row-container-part2">
        <p className="list-part2-heading">{name}</p>
        <button className="button-style-part2" type="button" onClick={onRemove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default ImgListItem
