import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';

const page = async () => {

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b14c60e1bmsh59ff099477d1f2ep1ecf91jsnd8700cabdb3a',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;






    return (
        <div className='px-20 mt-5' >
            <h1 className='text-2xl text-center font-bold'>Main Movie Page</h1>

            {

                main_data.map((curElem) => {
                    <MovieCard key={curElem.id} {...curElem} />


                })

            }







            {/* <Link href={"/about/ghfdhgh"}>
                <button className="bg-[#d90754] px-8 py-3 mt-5 rounded-lg text-white ">
                    Goto Movies
                </button>
            </Link> */}
        </div>
    )
}

export default page;