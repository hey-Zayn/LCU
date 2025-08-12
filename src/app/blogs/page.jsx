'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [blogs, setBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [allBlogs, setAllBlogs] = useState([]); // Store original unfiltered blogs

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('/api/blog');
            
            if (res.data && res.data.blogs) {
                setBlogs(res.data.blogs);
                setAllBlogs(res.data.blogs); // Store original data
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Get unique categories from blogs
    const categories = ['All', ...new Set(allBlogs.map(blog => blog.category).filter(Boolean))];

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setBlogs(allBlogs);
        } else {
            const filtered = allBlogs.filter(blog => 
                blog.category?.toLowerCase() === category.toLowerCase()
            );
            setBlogs(filtered);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16 mt-10">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Our Latest Articles</h1>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === category 
                                    ? 'bg-blue-500 text-white dark:bg-blue-600' 
                                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                            onClick={() => handleCategoryFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rest of the component remains the same */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs?.map((post) => (
                    <article key={post._id} className="relative text-white rounded-2xl shadow-lg w-full overflow-hidden h-full">
                        <div className="h-60 relative overflow-hidden">
                            <img 
                                src={post.image || "/placeholder-image.jpg"} 
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute bottom-4 left-4 bg-[#1b1b1b] px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm">
                                {post.category || "Featured"}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-sm text-gray-300 mb-3 space-x-2">
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </span>
                                <span>•</span>
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {post.readTime || '5'} min read
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {post.title}
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                                {post.description || "Discover valuable insights and expert perspectives in this article."}
                            </p>
                            <div className="relative m-[6%] ml-[2%] me-0 inline-block mx-[1%] group">
                                <Link href={`/blogs/${post._id}`}>
                                <button className="relative z-20 text-white px-8 py-4 uppercase tracking-wider rounded-md text-sm overflow-hidden cursor-pointer">
                                    <span className="relative z-20">Read More</span>
                                    <span className="absolute inset-0 bg-gradient-to-t from-[#181717]/60 to-[#505051]/60 transition-all duration-700 ease-in-out group-hover:from-[#505051]/60 group-hover:to-[#181717]/60 z-0" />
                                </button>
                                </Link>
                                <img
                                    src="/dev/images/left top.svg"
                                    alt=""
                                    className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 z-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                                />
                                <img
                                    src="/dev/images/right top.svg"
                                    alt=""
                                    className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 z-1 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1"
                                />
                                <img
                                    src="/dev/images/left bottom.svg"
                                    alt=""
                                    className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 z-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                                <img
                                    src="/dev/images/right bottom.svg"
                                    alt=""
                                    className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 z-1 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <div
                    
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Read Full Article
                </div>
            </div>
        </div>
    )
}

export default page