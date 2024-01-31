import { useEffect, useState } from 'react'
import './App.css'
import NewsGrid from './assets/Components/NewsGrid';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {
  const [news, setNews] = useState([]);
  const [apichange, setApiChange] = useState("android");
  const [searchQuery, setSearchQuery] = useState('')


  function change(e) {
    setSearchQuery(e.target.value)
  }

  function submit(e) {
    e.preventDefault();
    searchQuery ? setApiChange(searchQuery) : setApiChange('android')

  }

  const api = async () => {
    try {
      let response = await fetch(`https://newsapi.org/v2/everything?q=${apichange}&apiKey=2c903c8753634d1182e3043bdf6855ff`)
      let result = await response.json();
      console.log(result);
      setNews(result.articles)
    } catch (error) {
      console.error('Error fetching news:', error)
      setNews([])
    }
  }
  useEffect(() => {
    api()
  }, [apichange])

  // console.log();


  return (

    <>
      <div className="fixed top-0 left-0 right-0 bg-white p-4 shadow-md flex justify-between ">
        <form onSubmit={submit} className=''>
          <span className='py-2 m-2 '> <SearchIcon /> <input type='text' className='bg-zinc-800 border-none outline-none rounded text-white p-1' onChange={change} /></span>

          <Button type='submit' variant='outlined'> Search </Button>
        </form>
        <nav className="text-black"><a href="https://github.com/preston176/preston176">made by <GitHubIcon /></a></nav>
      </div>
      <NewsGrid news={news} />

    </>
  )
}

export default App
