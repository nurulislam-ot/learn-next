'use client'
import React from 'react'

const ErrorPage = (error: Error) => {
  return (
    <div>
      <p>Unexpected Error: {error.message}</p>
    </div>
  )
}

export default ErrorPage
