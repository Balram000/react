
import React from 'react'
import Card from './component/Card.jsx'


const App = () => {

  
    const jobs = [
      {
        id: 1,
        company: "Google",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7Lm3ijxl3S6UU3rQbIt01uy6SPL01wTseBuB1YI6g&s",
        title: "Senior React Developer",
        posted: "5 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$120/hr",
        location: "New York, USA",
      },
      {
        id: 2,
        company: "Microsoft",
        logo: "https://th.bing.com/th/id/OIP.zxfnTALMa1MRXGM79Hf-RwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm",
        title: "Senior Frontend Engineer",
        posted: "1 week ago",
        type: "Part-time",
        level: "Senior",
        pay: "$120/hr",
        location: "Seattle, USA",
      },
      {
        id: 3,
        company: "Amazon",
        logo: "https://www.clipartmax.com/png/small/261-2611542_last-year-amazon-made-their-big-acquistion-of-purchasing-amazon-a-logo.png",
        title: "Senior Full Stack Developer",
        posted: "4 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$120/hr",
        location: "Austin, USA",
      },
      {
        id: 4,
        company: "Netflix",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAQSqoOuzazI8nq9mb6_uNABSXewcUT3Y1qZxa7m3TA&s",
        title: "Senior UI Engineer",
        posted: "6 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$120/hr",
        location: "Los Angeles, USA",
      },
      {
        id: 5,
        company: "Adobe",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJfcyhlSDqW8VX3aJXwTPMmcbiFlNcaPg_yT4BmcjQA&s=10",
        posted: "1 week ago",
        type: "Part-time",
        level: "Senior",
        pay: "$110/hr",
        location: "San Jose, USA",
      },
      {
        id: 6,
        company: "Spotify",
        logo: "https://media.designrush.com/inspiration_images/757502/conversions/BDA-desktop.jpg",
        title: "Senior React Native Developer",
        posted: "3 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$120/hr",
        location: "Stockholm, Sweden",
      },
      {
        id: 7,
        company: "Airbnb",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0BL-i74O2UeKYmb9zpYaXyMOnmEcHvegRJwDRrYtBdnH8NAZzWNGfzs&s=10",
        title: "Senior Software Engineer",
        posted: "5 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$180/hr",
        location: "San Francisco, USA",
      },
      {
        id: 8,
        company: "Meta",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclx5PHTOnz4egMGi_uzVpJukQ9k195APmzYahlvzl8g&s=10",
        title: "Senior Frontend Developer",
        posted: "2 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$102/hr",
        location: "Menlo Park, USA",
      },
      {
        id: 9,
        company: "Apple",
        logo: "https://i.pinimg.com/736x/5e/67/1c/5e671cbe6457e88c59d9f82b8270749d.jpg",
        title: "Senior Web Developer",
        posted: "1 week ago",
        type: "Part-time",
        level: "Senior",
        pay: "$100/hr",
        location: "Cupertino, USA",
      },
      {
        id: 10,
        company: "Uber",
        logo: "data:image/png;base64,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",
        title: "Senior React Engineer",
        posted: "5 days ago",
        type: "Part-time",
        level: "Senior",
        pay: "$170/hr",
        location: "Chicago, USA",
      },
    ];
    
    
  return (
    <div className='parent'>
     
    {jobs.map(function(elem){
     
      
      return  <Card company={elem.company}  posted={elem.posted}  logo ={elem.logo} title={elem.title}
         type={elem.type} level={elem.level} pay ={elem.pay} location ={elem.location}/>
    })}

    </div>
  )
}

export default App
