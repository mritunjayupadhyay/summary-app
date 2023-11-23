'use client'
import React, { useEffect, useState } from 'react'
import { useLazyGetSummaryQuery } from '@/store/article/article.service'

function Form() {
    const [summary, setSummary] = useState('')
    const [url, setUrl] = useState('')

    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const { data } = await getSummary({
            articleUrl:
                'https://fireart.studio/blog/9-react-best-practices-to-improve-your-react-code/',
        })
        console.log('data', data, error, isFetching)
        setSummary(data.summary || '')
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    return (
        <React.Fragment>
            <form
                className="relative flex justify-center items-center"
                onSubmit={handleSubmit}
            >
                <img
                    src="/link.svg"
                    alt="link-icon"
                    className="absolute left-0 my-2 ml-3 w-5"
                />

                <input
                    type="url"
                    placeholder="Paste the article link"
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyDown={handleKeyDown}
                    required
                    className="url_input peer" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
                />
                <button
                    type="submit"
                    className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
                >
                    <p>↵</p>
                </button>
            </form>
            <div className="my-10 max-w-full flex justify-center items-center">
                {isFetching ? (
                    <img
                        src={'/loader.svg'}
                        alt="loader"
                        className="w-20 h-20 object-contain"
                    />
                ) : error ? (
                    <p className="font-inter font-bold text-black text-center">
                        {`Well, that wasn't supposed to happen...`}
                        <br />
                        <span className="font-satoshi font-normal text-gray-700">
                            {'error'}
                        </span>
                    </p>
                ) : (
                    summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                                Article{' '}
                                <span className="blue_gradient">Summary</span>
                            </h2>
                            <div className="summary_box">
                                <p className="font-inter font-medium text-sm text-gray-700">
                                    {summary}
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </React.Fragment>
    )
}

export default Form
