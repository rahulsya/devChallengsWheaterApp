import React from 'react'
import {MdGpsFixed} from 'react-icons/md'
import Clear from '../../assets/images/Clear.png'

import Button from '../Button'
export default function index() {
    return (
        <div className="container mx-auto px-5">
            {/* search place */}
            <div className="flex justify-between items-center mt-5">
                <Button>
                    Search for places
                </Button>
                <Button borderRadius="full">
                    <MdGpsFixed/>
                </Button>
            </div>
            <div className="flex flex-col justify-between items-center text-white py-5">
                <img src={Clear} alt="clear" className="mt-5"/>
                <div className="text-6xl mt-5">
                    15 °c
                </div>
                <div className="text-2xl mt-12">
                    Shower
                </div>

                <div className="text-1xl ">
                    Jakarta
                </div>
            </div>
        </div>
    )
}
