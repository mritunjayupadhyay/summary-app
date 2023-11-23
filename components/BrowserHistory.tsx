"use client"
import React, { useState } from 'react';
import Image from 'next/image'
export type Article = {
  url: string
  summary: string
}
const allArticles:Article[] = []

function BrowserHistory() {
    const handleSubmit = () => {}
    const [copied, setCopied] = useState("");
    console.log("all evn", process.env.RAPID_API_KEY);
  return (
    <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => {}}
              className='link_card'
            >
              <div className='copy_btn' onClick={() => {}}>
                <img
                  src={copied === item.url ? "/tick.svg" : "/copy.svg"}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>
              <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
  )
}

export default BrowserHistory;