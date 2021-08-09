import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
  render() {
    return (
      <div>
        <header class='text-gray-900 body-font bg-gray-100'>
          <div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-100'>
            <a class='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ml-10'>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='35.000000pt'
                height='30.000000pt'
                viewBox='0 0 489.000000 513.000000'
                preserveAspectRatio='xMidYMid meet'
              >
                <g
                  transform='translate(0.000000,513.000000) scale(0.100000,-0.100000)'
                  fill='#000000'
                  stroke='none'
                >
                  <path
                    d='M2295 4944 c-396 -39 -653 -111 -959 -266 -381 -195 -726 -511 -956
                        -878 -465 -742 -490 -1715 -63 -2475 248 -441 614 -789 1058 -1005 290 -141
                        544 -211 869 -241 145 -14 420 -6 561 16 191 30 477 106 519 139 13 10 12 21
                        -5 86 -96 369 -201 1064 -283 1875 -21 199 -63 667 -67 727 0 13 -37 -144
                        -160 -686 -99 -437 -176 -646 -281 -761 -60 -66 -111 -95 -183 -102 -80 -8
                        -144 17 -221 89 -101 95 -192 259 -330 596 l-59 143 -7 -213 c-17 -553 -57
                        -908 -120 -1077 -23 -60 -76 -124 -122 -148 -39 -20 -123 -20 -162 0 -74 38
                        -129 122 -164 249 -90 330 -183 1559 -167 2198 12 449 44 607 145 708 56 56
                        105 76 182 76 107 0 192 -58 288 -197 107 -157 178 -311 407 -886 152 -383
                        204 -505 211 -499 1 2 23 55 48 118 112 288 243 770 491 1810 48 201 100 406
                        116 456 16 50 29 96 29 101 0 25 -471 61 -615 47z'
                  />
                  <path
                    d='M3656 4588 c-3 -18 -8 -80 -11 -138 -3 -58 -21 -366 -40 -685 -49
                        -828 -55 -972 -55 -1420 0 -406 8 -603 36 -865 30 -287 42 -346 124 -610 43
                        -140 86 -281 95 -313 9 -31 20 -57 24 -57 15 0 166 118 265 206 54 49 144 141
                        198 204 641 744 778 1787 349 2665 -160 327 -380 606 -656 828 -94 76 -300
                        217 -317 217 -4 0 -9 -15 -12 -32z'
                  />
                </g>
              </svg>

              <span class='ml-3 text-xl'>Modish Makeover</span>
            </a>
            <nav class='md:ml-auto flex flex-wrap items-center text-base justify-center'>
              <Link to='/' class='mr-5 hover:text-gray-600' activeClassName="text-red-500">
                Home
              </Link>
              <Link to='/Gallery' class='mr-5 hover:text-gray-600' activeClassName="text-red-500">
                Gallery
              </Link>
              <Link to='/About' class='mr-5 hover:text-gray-600' activeClassName="text-red-500">
                About Us
              </Link>
              <Link to='/Review' class='mr-5 hover:text-gray-600' activeClassName="text-red-500">
                Review
              </Link>

            </nav>
            <button class='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0'>
              Book Appointment
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                class='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    )
  }
}
