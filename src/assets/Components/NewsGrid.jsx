
const NewsGrid = ({news}) => {
 
  return (
    <div className="grid gap-2 lg:grid-cols-4">
    {news.map((items) => (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={crypto.randomUUID()}>
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
                <div className="justify-between flex flex-row">
                <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow" >
                  <a href={items.url}>Read more</a>  
                </button>
                    <div className="font-semibold">by {items.author}</div>
                    <div className="text-gray-700">{items.publishedAt}</div>                
                </div>
            </div>
        </div>
    ))}
</div>
  )
}

export default NewsGrid
