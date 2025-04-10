
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching post:", error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then((res) => res.json())
            .then((data) => {
                setComment(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching comment:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading post...</p>;
    }

    if (!post) {
        return <p className="text-center text-red-500">Post not found!</p>;
    }

    console.log(comment?.comments)

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Post Title */}
            <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>

            {/* Dummy Image */}
            <img src={`https://picsum.photos/800/400?random=${id}`} alt={post.title} className="w-full mt-4 rounded-lg" />

            {/* Post Content */}
            <p className="text-gray-700 mt-4 text-lg">{post.body}</p>

            {/* Meta Information */}
            <p className="text-sm text-gray-500 mt-2">
                Posted {id} hours ago • <span className="font-medium">News</span>
            </p>
            <h3>Comments</h3>
            {
                comment?.comments?.length && comment?.comments?.map((a, i) => {
                    return (
                        <p>{a?.body}</p>
                    )
                })
            }
        </div>
    );
};

export default SinglePost;
