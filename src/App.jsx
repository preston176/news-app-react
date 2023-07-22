import { useEffect, useState } from 'react'
import './App.css'
import NewsGrid from './assets/Components/NewsGrid';

function App() {
  const [news, setNews] = useState([]);
  const [apichange, setApiChange] = useState("android");
  const [searchQuery, setSearchQuery] = useState('')


  function change(e) {
    setSearchQuery(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    setApiChange(searchQuery)
  }

   const api = async () => {
   try {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${apichange}&apiKey=2c903c8753634d1182e3043bdf6855ff`)
    let result = await response.json();
    console.log(result);
    setNews(result.articles)
   } catch (error)
   {
    console.error('Error fetching news:', error)
    setNews([])
   }
  }
   useEffect(() => {
    api()
   },[apichange])
  
// console.log();


  return (

<>
<form onSubmit={submit}>
<input type='text' className='bg-yellow-800 ' onChange={change} />
<button type='submit'> Search </button>
</form>
    <NewsGrid news={news} />
</>
  )
}

export default App
