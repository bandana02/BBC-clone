import React, { useEffect, useState } from "react";
import NewsCard from "./Newscard";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Data:", data);
                setNews(data.posts); // Set only the posts array
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const handleSingleNews = (ID) => {
        console.log(ID)
        navigate('/article/' + ID)
    }

    return (
        <section className="container mx-auto px-4 py-8">
            {/* Section Title */}
            <h3 className="text-sm font-bold text-gray-800 uppercase border-b pb-2">
                Only from the BBC
            </h3>

            {/* News Grid - 2 Cards Per Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" >
                {news.length > 0 ? (
                    news.map((item, index) => (
                        <div onClick={() => handleSingleNews(item.id)}>
                            <NewsCard
                                key={index}
                                image={`https://picsum.photos/400/300?random=${index}`} // Dummy Image
                                title={item.title}
                                description={item.body}
                                time={`Posted ${index + 1} hours ago`}
                                category="News"
                                onClick={handleSingleNews}
                            />
                        </div >
                    ))
                ) : (
                    <p>Loading news...</p>
                )}
            </div >
        </section >
    );
};

export default NewsSection;
