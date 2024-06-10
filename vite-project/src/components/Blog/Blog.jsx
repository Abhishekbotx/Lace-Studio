import React from 'react';
import Card from './Card';

const Blog = () => {
    const blogPosts = [
        {
            image: 'https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Fashion',
            title: 'Stumble on the designs worn and adored by famous influencers.',
            author: 'Karen Smith',
            date: 'March 21, 2024',
        },
        {
            image: 'https://images.pexels.com/photos/1185617/pexels-photo-1185617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Fashion',
            title: 'Explore the hottest fashion trends of the year for your stylish wardrobe.',
            author: 'Holly Gupta',
            date: 'April 10, 2024',
        },
        {
            image: 'https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Fashion',
            title: 'From Granny Chic to Grandpa Cool: Vintage Vibes Rule',
            author: 'Trisha Roy',
            date: 'May 05, 2024',
        },
        {
            image: 'https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            category: 'Fashion',
            title: 'Easy steps to prevent your sarees from being spoilt while regular washing.',
            author: 'Sudiksha',
            date: 'May 20, 2024',
        },
    ];

    return (
        <div className="container  mx-auto px-4 pb-8 ">
            <div className='bg-slate-800 w-full h-[7.5rem]'></div>
            <div className='flex'>
            <div className="flex flex-col w-[70vw] px-4  md:justify-between mb-8">
                <div>
                    <p className="text-sm text-gray-600 roboto-slab py-8 ">March 20, 2024</p>
                    <h1 className="text-5xl font-semibold  mt-2 great-vibes-regular mb-6 custom-color1">Desi Threads: The new old! How fashion trends are recycling in modern India.</h1>
                    <div className="md:w-full">
                    <img src="https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Feature" className="w-full rounded-lg shadow-lg mt-6 md:mt-0" />
                </div>
                    <p className="poppins text-lg text-gray-700 mt-4 ">
                    From the vibrant sarees adorned with intricate embroidery to the timeless elegance of the kurta, traditional Indian attire is being reimagined with modern silhouettes and innovative fabrics. Designers are blending old-world charm with new-age sensibilities, creating ensembles that are both respectful of heritage and refreshingly current.
                    </p>
                    <p className="poppins text-lg text-gray-700 mt-4 ">
                        
This revival isn't just limited to clothing. Accessories like jhumkas, bangles, and mojris are making a strong comeback, often paired with Western outfits to create a unique fusion look. The rich, handwoven textiles of India, such as Banarasi silk and Kanjeevaram, are being utilized in contemporary designs, making them accessible and appealing to the younger generation
                    </p>
                    <p className="poppins text-lg text-gray-700 mt-4 ">
                    Social media has played a significant role in this trend, with fashion influencers and celebrities flaunting these hybrid styles, inspiring millions to embrace their cultural roots while staying on-trend. This movement towards sustainable fashion is also noteworthy, as many of these traditional garments are hand-crafted, supporting local artisans and promoting eco-friendly practices.
                    </p>
                    <p className="poppins text-lg text-gray-700 mt-4 ">
                    As more people recognize the beauty and versatility of classic desi styles, it's clear that this trend is more than just a passing phase—it's a celebration of cultural identity and a testament to the timeless allure of Indian fashion.
                    </p>
                </div>
                <div className="mt-8  p-6 rounded-lg  text-center">
                <h2 className=" font-semibold great-vibes-regular text-5xl custom-color1">Newsletter</h2>
                <p className="text-gray-700 mt-4 px-[4.5vw] poppins-semibold ">Stay updated on the latest Indian fashion trends and exclusive offers by subscribing to our newsletter today!</p>
                <form className="mt-4 w-full flex justify-center">
                    <input
                        type="email"
                        className="px-4 py-2 border-2 border-slate-900 rounded-sm  w-[50%] "
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
                        image={post.image}
                        category={post.category}
                        title={post.title}
                        author={post.author}
                        date={post.date}

                    />
                ))}
            </div>
            </div>
            </div>
            
        </div>
    );
};

export default Blog;
