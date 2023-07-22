import { useEffect, useState } from 'react'
import './App.css'
import NewsGrid from './assets/Components/NewsGrid';

function App() {
  const [news, setNews] = useState([]);


   const api = async () => {
    let response = await fetch("https://newsapi.org/v2/everything?q=google&apiKey=2c903c8753634d1182e3043bdf6855ff")
    let result = await response.json();
    console.log(result);
    setNews(result.articles)
   }
   useEffect(() => {
    api()
   },[])
  
// console.log();


  return (

<>
    <NewsGrid news={news} key="" />
</>
  )
}

export default App
