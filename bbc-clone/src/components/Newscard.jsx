import React from "react";

const NewsCard = ({ image, title, description, time, category }) => {
    return (
        <div className="w-full  p-2">
            <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <img src={image} alt={title} className="w-full object-cover" style={{ height: '300px' }} />

                {/* Content */}
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900 hover:underline cursor-pointer">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">{description}</p>
                    <p className="text-xs text-gray-500 mt-2">
                        {time} • <span className="font-medium">{category}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
