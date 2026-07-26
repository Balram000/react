import { Bookmark } from 'lucide-react'
import './index.css';

const Card = ({ logo, company, posted, title, type, level, pay, location }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={logo} alt={company} />
        <button> Save <Bookmark size={12} /></button>
      </div>
      <div className="center">
        <h3>{company} <span> {posted} </span></h3>
        <h2> {title}</h2>

        <div className='tag'>
          <h4> {type}</h4>
          <h4> {level}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3> {pay} </h3>
          <h4>{location}</h4>
        </div>
        <button> Apply now </button>
      </div>
    </div>
  )
}

export default Card
