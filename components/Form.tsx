"use client"
import React from 'react';
import Image from 'next/image'

function Form() {
    const handleSubmit = () => {}
  return (
    <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img
            src="/link.svg"
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={""}
            onChange={(e) => {}}
            required
            className='url_input peer' // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
          />
          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 '
          >
            <p>↵</p>
          </button>
        </form>
  )
}

export default Form;