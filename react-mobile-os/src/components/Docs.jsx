import "../App.css"
const Docs=({type,val})=>{
    return <li className={`${val===3 ? "circle": "disc"}`}>{type}</li>
  }
export default Docs;