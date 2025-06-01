import React from 'react'
import Animation from '../Components/initialAnim'
import Post from '../markdown/posts.mdx';

export default function Blog() {
  return (

<Animation>
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p className="mb-2">Welcome to our blog! Here we share insights, stories, and updates.</p>
      <p className="mb-6">Stay tuned for our latest posts!</p>
      <Post/>
    </div>
  </Animation>

  )
  } 

