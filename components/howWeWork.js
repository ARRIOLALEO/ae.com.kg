import React from 'react'

export default function HowWeWork() {
    return (
        <div className="flex flex-col justify-center m-auto">
        <div className="flex md:flex-row flex-col bg-teal-200 justify-center md:text-left text-center">
           <div className="flex flex-col justify-center items-center relative">
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full  border-teal-300 border-dashed"></div>
              </div>
              <div className="rounded-full w-12 h-12 text-xl text-teal-100 bg-teal-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">1</div>
              <img alt="step1" className="w-56 h-56 rounded-full shadow my-5 object-scale-down" src="https://image.flaticon.com/icons/svg/1330/1330216.svg" /> 
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-teal-300 border-dashed"></div>
              </div>
           </div>
           <div className="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-teal-200">
              <div className="text-xs uppercase font-bold text-teal-500">Step 1 - Idea</div>
              <div className="md:text-3xl text-xl font-bold text-teal-700">Find your best idea</div>
              <div className="mt-4 text-teal-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
           </div>
        </div>
        <div className="flex md:flex-row flex-col bg-orange-200 justify-center md:text-left text-center">
           <div className="flex flex-col justify-center items-center relative">
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-orange-300 border-dashed"></div>
              </div>
              <div className="rounded-full w-12 h-12 text-xl text-orange-100 bg-orange-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">2</div>
              <img alt="step2" className="w-56 h-56 rounded-full shadow my-5 object-scale-down" src="https://image.flaticon.com/icons/svg/1330/1330216.svg" /> 
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-orange-300 border-dashed"></div>
              </div>
           </div>
           <div className="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-orange-200">
              <div className="text-xs uppercase font-bold text-orange-500">Step 2 - Collaboration</div>
              <div className="md:text-3xl text-xl font-bold text-orange-700">Find your team and collaborate</div>
              <div className="mt-4 text-orange-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
           </div>
        </div>
        <div className="flex md:flex-row flex-col bg-indigo-200 justify-center md:text-left text-center">
           <div className="flex flex-col justify-center items-center relative">
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-indigo-300 border-dashed"></div>
              </div>
              <div className="rounded-full w-12 h-12 text-xl text-indigo-100 bg-indigo-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">3</div>
              <img alt="step3" className="w-56 h-56 rounded-full shadow my-5 object-scale-down" src="https://image.flaticon.com/icons/svg/1330/1330216.svg"/> 
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-indigo-300 border-dashed"></div>
              </div>
           </div>
           <div className="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-indigo-200">
              <div className="text-xs uppercase font-bold text-indigo-500">Step 3 - Planification</div>
              <div className="md:text-3xl text-xl font-bold text-indigo-700">Make a good plan and prepare tasks</div>
              <div className="mt-4 text-indigo-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
           </div>
        </div>
        <div className="flex md:flex-row flex-col bg-pink-200 justify-center md:text-left text-center">
           <div className="flex flex-col justify-center items-center relative">
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full border-r-4 border-pink-300 border-dashed"></div>
              </div>
              <div className="rounded-full w-12 h-12 text-xl text-pink-100 bg-pink-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2">4</div>
              <img alt="step4" className="w-56 h-56 rounded-full shadow my-5 object-scale-down" src="https://image.flaticon.com/icons/svg/1330/1330216.svg"/> 
              <div className="w-56 h-12 md:flex hidden justify-center">
                 <div className="h-full  border-pink-300 border-dashed"></div>
              </div>
           </div>
           <div className="ml-5 p-10 flex flex-col justify-center max-w-2xl rounded bg-pink-200">
              <div className="text-xs uppercase font-bold text-pink-500">Step 4 - Implementation</div>
              <div className="md:text-3xl text-xl font-bold text-pink-700">Execute, impletement your solution</div>
              <div className="mt-4 text-pink-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
           </div>
        </div>
     </div>
    )
}
