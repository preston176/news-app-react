import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const NewsGrid = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=technology&apiKey=2c903c8753634d1182e3043bdf6855ff`
        );
        const data = await response.json();
        // Filter out articles that don't have the required fields
        const filteredArticles = data.articles.filter(item => 
          item.title && item.description && item.urlToImage
        );
        setNews(filteredArticles);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchNews();
  }, []);

  // Share functionality
  const handleShare = (platform, url) => {
    let shareUrl = "";
    const title = encodeURIComponent("Check out this news article!");
    
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${title} ${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };

  // Loader component
  const Loader = () => (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
      <p className="text-gray-500 dark:text-gray-300 text-lg">Please wait...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 dark:bg-gradient-to-br dark:from-gray-800 dark:to-black p-8 transition-colors duration-300">
      {loading ? (
        <Loader /> // Show loader while fetching data
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {news.length > 0 ? ( // Check if there are any articles to display
            news.map((item) => (
              <div
                className="relative max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-transform transform hover:scale-105 group"
                key={item.url}
              >
                <img
                  className="w-full h-64 object-cover"
                  src={item.urlToImage}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-xs border border-white text-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    Read More
                  </a>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900">
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-4 z-10">
                      <button
                        onClick={() => handleShare("twitter", item.url)}
                        className="text-blue-500"
                      >
                        <FaTwitter />
                      </button>
                      <button
                        onClick={() => handleShare("facebook", item.url)}
                        className="text-blue-500"
                      >
                        <FaFacebook />
                      </button>
                      <button
                        onClick={() => handleShare("linkedin", item.url)}
                        className="text-blue-500"
                      >
                        <FaLinkedin />
                      </button>
                      <button
                        onClick={() => handleShare("whatsapp", item.url)}
                        className="text-green-500"
                      >
                        <FaWhatsapp />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">No articles available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
