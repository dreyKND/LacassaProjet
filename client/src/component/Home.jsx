import React from 'react';
import Header from './Header';
import Banner from './Banner';
const Home = () => {
    return (

         <div>
            <Header>

            </Header>
            <Banner/>

            <main className="">
                <section className='pt-2'>
                    <h2 className=' text-4xl font-semibold pb-5'>Explore Nearby</h2>
                </section>
            </main>
         </div>


    )

}
export default Home;
