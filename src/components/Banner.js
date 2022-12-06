import React from 'react'
import Header from './Header';
import "../App.css";



const Banner = () => {
    return (
        <>
            <Header />
            <section className='showcase'>
                <div className='overlay'>
                    <article>
                        <h1 className='heading text-center'>All the SpaceX Data at one place</h1>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Banner