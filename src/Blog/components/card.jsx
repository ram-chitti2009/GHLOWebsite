import React from 'react'

export default function Card(props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{props.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{props.description}</p>
      <div className="flex justify-between items-center">
        <a 
          href={`/blog/${props.slug}`} 
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline transition-colors duration-200"
        >
          Read more →
        </a>
      </div>
    </div>
  )
}
