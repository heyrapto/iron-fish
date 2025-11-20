"use client"

import { useState } from "react"
import { FiChevronDown } from "react-icons/fi"

export const BridgeButton = () => {
    const [bridgeExpanded, setBridgeExpanded] = useState(false)
    return (
        <div className="relative">
              <div className="bg-white border-2 border-black rounded-[30px] overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ease-in-out">
                {/* Bridge Button Header */}
                <button
                  onClick={() => setBridgeExpanded(!bridgeExpanded)}
                  className="inline-flex items-center justify-center gap-4 px-8 py-4 font-medium text-[20px] text-black cursor-pointer hover:bg-gray-50 transition-colors w-full"
                >
                  <span>Bridge</span>
                  <div className={`transition-transform duration-300 ${bridgeExpanded ? 'rotate-180' : ''}`}>
                    <FiChevronDown size={20} />
                  </div>
                </button>

                {/* Expandable Menu Items */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    bridgeExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t-2 border-black">
                    {/* Bridge In */}
                    <a
                      href="#"
                      className="flex items-center justify-between px-8 py-4 text-black hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">Bridge in</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path stroke="#000" strokeWidth="2" d="M8.382 4.636c1.552 1.345 5.401 3.29 8.382.31m.31 8.382c-1.345-1.552-3.29-5.401-.31-8.381M4.346 17.364 17.074 4.636"></path></svg>
                    </a>
                    
                    {/* Divider */}
                    <div className="border-t border-black"></div>
                    
                    {/* Bridge Out */}
                    <a
                      href="#"
                      className="flex items-center justify-between px-8 py-4 text-black hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">Bridge out</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path stroke="#000" strokeWidth="2" d="M8.382 4.636c1.552 1.345 5.401 3.29 8.382.31m.31 8.382c-1.345-1.552-3.29-5.401-.31-8.381M4.346 17.364 17.074 4.636"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
    )
}