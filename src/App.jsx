import { useEffect, useState } from 'react'
import './App.css'

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
  
console.log();


  return (

<>
    <div className="grid gap-2 lg:grid-cols-4">
    {news.map((items, key) => (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
                className="object-cover w-full h-48"
                src={items.urlToImage}
                alt="image"
            />
            <div className="p-4">
                <h4 className="text-xl font-semibold text-blue-600">
                    
                    {items.title}
                </h4>
                <p className="mb-2 leading-normal">
                {items.content}
                </p>
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                    Read more
                </button>
            </div>
        </div>
    ))}
</div>
</>
  )
}

export default App
