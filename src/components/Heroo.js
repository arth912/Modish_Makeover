import React, { Component } from 'react'

export default class Heroo extends Component {
  render() {
    return (
      <div>
        <section class='text-gray-600 body-font'>
          <div class='container mx-auto flex flex-col  justify-center items-center'>
            <div class='w-full md:w-2/3 flex flex-col mb-16 items-center font-bold text-center  absolute z-10'>
              <h1 class='title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900 '>
                Modish Makeover
              </h1>
              <p class='mb-8 leading-relaxed text-xl font-medium text-gray-900'>
                Kickstarter biodiesel roof party wayfarers cold-pressed.
                Palo santo live-edge tumeric scenester copper mug
                flexitarian. Prism vice offal plaid everyday carry.
                Gluten-free chia VHS squid listicle artisan.
              </p>
            </div>
            <img
              class='lg:w-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded opacity-50'
              alt='hero'
              src='https://source.unsplash.com/1660x800/?beautysalon'
            ></img>
          </div>
        </section>
      </div>
    )
  }
}
