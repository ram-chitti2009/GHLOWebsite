import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../lib/getPost'

export default function BlogContent() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if (!slug) return
    getPostBySlug(slug).then(setPost)
  }, [slug])

  if (!post) return <p className="p-8 text-center">Loading…</p>

  const { title, description, Content } = post

  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-8 bg-white dark:bg-blue-800 rounded-lg shadow-lg prose lg:prose-xl">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      {description && <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>}
      <Content />
    </div>
  )
}