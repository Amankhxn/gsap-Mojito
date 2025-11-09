import React from 'react'
import { cocktailLists, mockTailLists } from '../constant'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {
    useGSAP(() => {
       const paralax =  gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 20% ",
                end: "bottom 70%",
                scrub: true,
              

            }
        })

        paralax.from(".c-left-leaf" , {
            x : -100 , 
            y : 100
        })
        .from(".c-right-leaf" , {
            x : 100 ,
            y : 100
        })
    })

    return (
        <section className='noisy' id='cocktails' >
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" className='c-left-leaf' />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" className='c-right-leaf' />

            <div className='list'>
                <div className="popular">
                    <h2>Popular Cocktails</h2>

                    <ul>
                        {cocktailLists.map((list) => (
                            <li key={list.name}>
                                <div className='md: me-28'>
                                    <h3>{list.name}</h3>
                                    <p>{list.country} || {list.detail}</p>
                                </div>
                                <span>
                                    {list.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>loved Cocktails</h2>

                    <ul>
                        {mockTailLists.map((list) => (
                            <li key={list.name}>
                                <div className='me-28'>
                                    <h3>{list.name}</h3>
                                    <p>{list.country} || {list.detail}</p>
                                </div>
                                <span>
                                    {list.price}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </section >
    )
}

export default Cocktails;
