import React, { useEffect } from 'react';
import Animation from '../Components/initialAnim';
import Card from './components/card.jsx';
import processMdxFiles from './lib/getPost.jsx';

export default function Blog() {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const allPostsArray = await processMdxFiles();
        if (allPostsArray.length) {
          setPosts(allPostsArray);
          console.log("Posts loaded:", allPostsArray);
        }
      } catch (error) {
        console.error("Error processing MDX files:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Animation>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <p className="mb-6">Stay tuned for our latest posts!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {posts.map(post => (
            <Card 
              key={post.slug}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </Animation>
  );
}


