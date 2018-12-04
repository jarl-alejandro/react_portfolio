import React from 'react'

export default ({ children, title }) => (
  <section className='uk-section uk-container'>
    {title && <h1>{title}</h1>}
    {children}
  </section>
)
