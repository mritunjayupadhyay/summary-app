"use client"
import React, { useEffect, useState } from 'react'
import { useLazyGetSummaryQuery } from '@/store/article/article.service';
import { useSelector } from 'react-redux';

function DisplayResult() {
    const [getSummary, { error, isFetching = true}] = useLazyGetSummaryQuery()
    const summary = useSelector((state: any) => state.article.summary);
    // const [isFetching, setFetching] = useState("");
    // const error = {data: {error: ""}};
    console.log("DisplayResult", new Date(), error, isFetching);
    useEffect(() => {
        console.log("DisplayResult: isFetching", isFetching);
    }, [isFetching])
  return (
    <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={"/loader.svg"} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {'error'}
            </span>
          </p>
        ) : (
          summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
  )
}

export default DisplayResult