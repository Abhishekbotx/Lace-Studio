import React, { useEffect, useState } from 'react';
import Card from './Card';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/getBlogs", {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Fetched blog posts:', response.data.data);
        setBlogPosts(response.data.data);
        if (response.data.data.length > 0) {
          setSelectedPost(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('blogPost state updated:', blogPosts);
  }, [blogPosts]);

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className='bg-slate-800 w-full h-[7.5rem]'></div>
      <div className='flex'>
        <div className="flex flex-col w-[70vw] px-4 md:justify-between mb-8">
          {selectedPost && (
            <>
              <div>
                <div className='flex items-center gap-x-4'>
                  <p className="text-gray-600 roboto-slab py-8 ">{selectedPost.blogDate}</p>
                  <Stack direction="row" spacing={2}>
                    <Avatar className='h-4' alt="Editor" src={`http://localhost:3001/blogEditorImages/${selectedPost.editorImage}`} />
                  </Stack>
                  <p className="text-gray-900 roboto-slab py-8">{selectedPost.editorName}</p>
                </div>
                <h1 className="text-5xl font-semibold mt-2 great-vibes-regular mb-6 custom-color1">{selectedPost.blogTitle}</h1>
                <div className="md:w-full">
                  <img src={`http://localhost:3001/blogImages/${selectedPost.blogImage}`} alt="Feature" className="w-full h-[75vh] object-cover rounded-lg shadow-lg mt-6 md:mt-0" />
                </div>
                <div>
                  {selectedPost.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="poppins text-lg text-gray-700 mt-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="mt-8 p-6 rounded-lg text-center">
            <h2 className="font-semibold great-vibes-regular text-5xl custom-color1">Newsletter</h2>
            <p className="text-gray-700 mt-4 px-[4.5vw] poppins-semibold">Stay updated on the latest Indian fashion trends and exclusive offers by subscribing to our newsletter today!</p>
            <form className="mt-4 w-full flex justify-center">
              <input
                type="email"
                className="px-4 py-2 border-2 border-slate-900 rounded-sm w-[50%]"
                placeholder="Enter your email"
              />
              <button type="submit" className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-slate-700 text-white rounded-sm w-[30%]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className='custom-color1 poppins-semibold py-8'> RECENT BLOG POSTS</div>
          <div className="grid md:grid-cols-1 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                image={`http://localhost:3001/blogImages/${post.blogImage}`}
                category='Fashion'
                title={post.blogTitle}
                author={post.editorName}
                date={post.blogDate}
                onClick={() => setSelectedPost(post)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
