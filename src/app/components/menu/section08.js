'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../public/img/menu/section08img01.webp'
import img02 from '../../../../public/img/index/section05img01.webp'


export default function Section08() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">

         <Image  
				width={300}
			   height={300}
				loading="lazy"
				src={img01}
				alt="Picture of the author"
			/>


         <Image  
            className="hidden xl:block absolute left-0 top-36 transform scale-x-[-1]"
				width={280}
			   height={280}
				loading="lazy"
				src={img02}
				alt="Picture of the author"
			/>
			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Pupusas" /></div>
            <div className="text-slate-800 my-5 text-2xl HoarseSolid text-center max-w-[1000px] ">
               Homemade corn tortilla filled with cheese. Includes
               pickled cabbage and tomato salsa.
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     Cheese
                     </div>
                     
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     Cheese & BEANS
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     Cheese & PORK
                     </div>
                   <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>




               </div>

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                     Cheese & SPINACH
                     </div>

                     <div className="w-full md:h-[60px]  text-slate-800  flex justify-center items-start text-center text-lg">
                       
                     </div>
                     
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-start">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl min-h-[80px] flex justify-center items-center">
                        Cheese & loroco
                     </div>
                     <div className="w-full md:h-[60px]  text-slate-800  flex justify-center items-start text-center text-lg">
                        Loroco is El Salvador’s Organic
                        Edible Flower
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $4.99
                     </div>
                  </div>



                




               </div>

            </div>
         </div>
         
    	</div>
  	)
}
