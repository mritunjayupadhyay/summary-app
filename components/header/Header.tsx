'use client'
import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="w-full flex justify-between items-center p-5">
                <Image
                    src="logo.svg"
                    alt="Vercel Logo"
                    className="w-28 object-contain"
                    width={80}
                    height={100}
                    priority
                />
                <button
                    type="button"
                    className="black_btn"
                    onClick={() =>
                        window.open(
                            'https://github.com/mritunjayupadhyay/summary-app'
                        )
                    }
                >
                    Github
                </button>
            </nav>
            <h1 className="head_text">
                Summarise article with <br className="max-md:hidden" />
                <span className="orange_gradient">Open AI gradient</span>
            </h1>
            <h2 className="desc">
                Simplify your reading with Summize, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries
            </h2>
        </header>
    )
}

export default Header
