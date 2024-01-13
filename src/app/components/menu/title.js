'use client'
import Image from 'next/image'
import img01 from '../../../../public/img/menu/title01.webp'
import img02 from '../../../../public/img/menu/title02.webp'
export default function Title(props) {
  	return (
    	<div className="w-full flex flex-row justify-center items-center  ">
			<div className="hidden md:block">
            <div className="mr-5">
               <Image  
						width={36}
						height={100}
						loading="lazy"
						src={img01}
						alt="Picture of the author"
					/>
            </div>
         </div>
         <div className="text-orange-700 HaydonBrush text-8xl   ">{props.title}</div>
         <div className="hidden md:block">
            <div className="ml-14">
               <Image  
						width={36}
						height={100}
						loading="lazy"
						src={img02}
						alt="Picture of the author"
					/>

            </div>
         </div>
    	</div>
  	)
}
