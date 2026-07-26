import Card from './component/Card.jsx'
import { jobs } from './data/jobs.js'

const App = () => {
  return (
    <div className='parent'>
      {jobs.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  )
}

export default App
