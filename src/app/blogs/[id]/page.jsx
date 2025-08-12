'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { FiCalendar, FiClock, FiShare2, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { HiOutlineBookmark, HiOutlineHeart } from 'react-icons/hi';

const Page = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { id } = useParams();

    const fetchBlog = async () => {
        try {
            const res = await axios.get(`/api/blog?id=${id}`);
            if (res.data) {
                setBlog(res.data.blog);
                const relatedRes = await axios.get(`/api/blog?category=${res.data.blog.category}`);
                setRelatedBlogs(relatedRes.data.blogs.filter(b => b._id !== id).slice(0, 3));
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
            toast.error('Failed to load blog post');
        } finally {
            setLoading(false);
        }
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await axios.post('/api/email', { email });
            if (res.data.success) {
                toast.success('Thank you for subscribing!');
                setIsSubscribed(true);
                setEmail('');
            } else {
                toast.error(res.data.message || 'Subscription failed');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Failed to subscribe. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchBlog();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Blog post not found
                </h1>
                <Link href="/blogs" className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Browse all articles
                </Link>
            </div>
        );
    }

    const handleShare = (platform) => {
        const url = window.location.href;
        const title = blog.title;
        
        switch(platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            default:
                navigator.clipboard.writeText(url);
                toast.success('Link copied to clipboard!');
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Main Content */}
                <div className="lg:w-2/3">
                    <article className="max-w-none">
                        {/* Article Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <Link href={`/blogs?category=${blog.category}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                                    {blog.category || 'General'}
                                </Link>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <FiCalendar className="w-4 h-4" />
                                    {new Date(blog.date || blog.createdAt).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <FiClock className="w-4 h-4" />
                                    {blog.readTime || '5'} min read
                                </span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img 
                                        src={blog.authorImg || "https://api.dicebear.com/9.x/notionists/svg"} 
                                        alt={blog.author}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">
                                            {blog.author || 'Anonymous'}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            {blog.authorTitle || 'Writer'}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => setIsLiked(!isLiked)}
                                        className={`p-2 rounded-full ${isLiked ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                    >
                                        <HiOutlineHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                                    </button>
                                    <button 
                                        onClick={() => setIsBookmarked(!isBookmarked)}
                                        className={`p-2 rounded-full ${isBookmarked ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                    >
                                        <HiOutlineBookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="mb-10 rounded-xl overflow-hidden">
                            <img 
                                src={blog.image || "/placeholder-image.jpg"} 
                                alt={blog.title}
                                className="w-full h-auto object-cover aspect-video"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                                {blog.description}
                            </p>
                            
                            {/* Your blog content would go here */}
                            <div className="mt-8" dangerouslySetInnerHTML={{ __html: blog.content }} />
                        </div>

                        {/* Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                            <div className="mt-12 flex flex-wrap gap-2">
                                {blog.tags.map(tag => (
                                    <Link 
                                        key={tag} 
                                        href={`/blogs?tag=${tag}`}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Share this article</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Help spread the knowledge
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => handleShare('twitter')}
                                        className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                    >
                                        <FiTwitter className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('linkedin')}
                                        className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                    >
                                        <FiLinkedin className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('facebook')}
                                        className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                                    >
                                        <FiFacebook className="w-5 h-5" />
                                    </button>
                                    <button 
                                        onClick={() => handleShare('copy')}
                                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    >
                                        <FiShare2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Sidebar */}
                <div className="lg:w-1/3">
                    <div className="sticky top-24 space-y-8">
                        {/* Related Articles */}
                        <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white">Recommended Articles</h3>
                                <p className="text-sm text-gray-400 mt-1">Curated content you might find valuable</p>
                            </div>
                            <div className="space-y-5">
                                {relatedBlogs.length > 0 ? (
                                    relatedBlogs.slice(0, 4).map(blog => (
                                        <Link 
                                            key={blog._id} 
                                            href={`/blogs/${blog._id}`}
                                            className="group flex gap-4 items-start p-2 -m-2 rounded-lg transition-all duration-200 hover:bg-gray-800/50"
                                        >
                                            <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border border-gray-700">
                                                <img 
                                                    src={blog.image || "/placeholder-image.jpg"} 
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-200"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                                    {blog.title}
                                                </h4>
                                                <div className="flex items-center mt-1 text-xs text-gray-400">
                                                    <span>
                                                        {new Date(blog.date || blog.createdAt).toLocaleDateString('en-US', { 
                                                            month: 'short', 
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                    <span className="mx-2">•</span>
                                                    <span>{blog.category}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="text-center py-4">
                                        <p className="text-gray-400 text-sm">No recommended articles at this time</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl text-white border border-gray-700">
                            <h3 className="text-xl font-bold mb-3">Stay updated</h3>
                            <p className="text-sm text-gray-300 mb-4">
                                Get the latest articles and news delivered to your inbox
                            </p>
                            <form onSubmit={handleSubscribe} className="space-y-3">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address" 
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                                    disabled={isSubscribed}
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className={`w-full px-4 py-2 ${isSubscribed ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-500'} text-white rounded-lg font-medium transition-colors`}
                                    disabled={isSubmitting || isSubscribed}
                                >
                                    {isSubmitting ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
                                </button>
                            </form>
                            <p className="text-xs text-gray-400 mt-3">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;