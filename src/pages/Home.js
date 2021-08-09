import React from 'react'
import Service from '../components/Service.js'
import Service1 from '../components/Service1'
import Service2 from '../components/Service2'
import Heroo from '../components/Heroo.js'
import Product from '../components/Product'
import Testimonial from '../components/Testimonial'
import Location from '../components/Location'

export const Home = () => {
    return (
        <div>
            <Heroo />
            <Service name1="Threading" name2="Make Up" name3="Hair Treatment" />
            <Service1 name1="Manicure" name2="Pedicure" name3="Waxing" />
            <Service2 name1="Facials" name2="Rejuvenation Therapies" name3="Clean Up / Bleach" />
            <Testimonial />
            <Product />
            <Location />
        </div>
    )
}
export default Home;