import React from 'react'

interface PageProperties {
  title: string
  children?: React.ReactNode
}

const Page = ({title, children}: PageProperties) => (
  <div className="page">
    <h1>{title}</h1>
    {children}
  </div>
)

export default Page