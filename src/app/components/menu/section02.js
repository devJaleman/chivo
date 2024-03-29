'use client'
import Title from "./title.js"
import Image from 'next/image'
import img01 from '../../../../public/img/index/section05img01.webp'


export default function Section02() {
  	return (
    	<div className="w-full py-20  px-5 bg-amber-50 flex  flex-col justify-center items-center relative ">
         <Image  
            className="hidden xl:block absolute top-0 right-0"
				width={280}
			   height={280}
				loading="lazy"
				src={img01}
				alt="Picture of the author"
			/>
			<div className="w-full flex flex-col justify-center items-center">
            <div><Title title="Breakfast" /></div>
            <div className="text-slate-800 my-5 text-2xl HoarseSolid ">8AM-11AM</div>
            <div className="w-full flex flex-col justify-center items-center mt-5">

               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">breakfast Burrito</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Flour tortilla filled with
                        scrambled eggs, cheese, choice
                        of protein, beans, fried potato,
                        pico de gallo, sour cream, and
                        ranchera sauce.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $9.99
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">HUEVOS RANCHEROS</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Eggs over easy or over medium
                        topped with Ranchera Sauce
                        served with fried beans, farmer&apos;s
                        cheese, sour cream, fried
                        plantains with fried tortillas.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $9.99
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">Chivo’s Breakfast</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Salvadorian Style fried Eggs
                        served with fried beans,
                        farmer&apos;s cheese, sour cream,
                        fried plantains and tortillas.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $9.99
                     </div>
                  </div>




               </div>




               <div className="w-full max-w-[1000px] xl:max-w-[1200px] flex flex-col md:flex-row justify-center md:justify-between items-center">

                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center  items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">Omelette a la Mexicana</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Omelette stuffed with chili
                        con carne topped with
                        signature ranchera sauce
                        and cheese.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $10.50
                     </div>
                  </div>


                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">Veggie Omelette</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Omelette with peppers, onions,
                        jalapeños topped with green
                        sauce and cheese.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $10.50
                     </div>
                  </div>



                  <div className="w-full my-8 max-w-[300px] flex flex-col justify-center md:justify-between items-center">
                     <div className="w-[280px] SunMore text-center text-orange-700 text-3xl">Huevos con Chorizo</div>
                     <div className="w-full min-h-[160px] text-slate-800  flex justify-center items-start text-center text-lg">
                        Salvadorian Style fried Eggs
                        served with Chivo&apos;s signature
                        chorizo, fried beans, farmer&apos;s
                        cheese, sour cream, fried
                        plantains and tortillas.
                     </div>
                     <div className="w-full flex justify-center items-center text-center text-3xl  text-slate-800 HoarseSolid">
                        $10.50
                     </div>
                  </div>




               </div>

            </div>
            <div className="w-full py-5 flex justify-center items-center text-lg text-slate-800"> (includes description on each option) </div>
         </div>
         
    	</div>
  	)
}
