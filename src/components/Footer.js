import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class='bg-gray-700 text-gray-100 body-font '>
          <div class='container px-2 py-3 mx-auto flex items-center sm:flex-row flex-col'>
            <a class='flex title-font font-medium items-center md:justify-start justify-center ml-20 text-gray-100'>
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
            <p class='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
              © 2020 Arth  
            </p>
            <span class='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mr-16'>
              <a class='text-gray-300'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-13 h-8'
                  viewBox='0 0 24 24'
                >
                  <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-300'>
                <svg
                  fill='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-13 h-8'
                  viewBox='0 0 24 24'
                >
                  <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-300'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-13 h-8'
                  viewBox='0 0 24 24'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
                </svg>
              </a>
              <a class='ml-3 text-gray-300'>
                <svg
                  fill='currentColor'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='0'
                  class='w-13 h-8'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='none'
                    d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                  ></path>
                  <circle cx='4' cy='4' r='2' stroke='none'></circle>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}
