'use client'
import Image from 'next/image'
import img01 from '../../../../public/img/index/section04img01.webp';



export default function Section04() {

   let title = "ABOUT CHIVO";
   let subTitle = "Chivo taqueria is an authentic Mexican Restaurant serving up Boston’s best tacos,   burritos, pupusas, bowls and quesadillas.";
   let textBtn = "VIEW ALL";

  	return (
    	<div className="w-full  bg-pink-300 flex  flex-col md:flex-row  justify-center items-center lg:p-10 xl:p-16">

         <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
            <div className="w-[400px] h-[300px] lg:w-[600px] lg:h-[450px]">
               <Image  className="" 
						width={600}
						height={450}
						loading="lazy"
						src={img01}
						alt="Picture of the author"
					/>


            </div>
         </div>


         <div className="w-full md:w-1/2 py-10 flex justify-center items-center">

            <div className="w-full flex flex-col justify-center items-center px-6">

               <div className="HoarseSolid text-orange-700 text-6xl text-center">{title}</div>
               <div className="RockGrotesk text-slate-800 text-xl text-justify mt-10 max-w-[500px]">{subTitle}</div>
               <div className="w-full flex justify-center items-center py-8">

                  <a className="w-[240px] bg-slate-800 h-[60px] cursor-pointer text-white rounded-full RockGrotesk flex items-center justify-center text-xl tracking-[5px]"> 
                     {textBtn} 
                  </a>

               </div>

            </div>

         </div>


			

        




    	</div>
  	)
}
