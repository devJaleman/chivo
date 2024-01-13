'use client'
import Image from 'next/image'
import img01 from '../../../../public/img/contact/section01img01.webp'
import img02 from '../../../../public/img/contact/section01img02.webp'
export default function Section01() {
	let title = "CONTACT";
  	return (
    	<div className="w-full   bg-blue-500 flex  flex-col justify-center items-center md:flex-row">

			<div className=" hidden md:block w-1/2">

				<div className="w-full h-full xl:hidden">
					<div className="w-full max-w-[500px] flex justify-center items-center">
						<Image  
							width={500}
							height={500}
							loading="lazy"
							src={img01}
							alt="Picture of the author"
						/>
					</div>
				</div>
				

				<div className="w-full h-full hidden xl:block">
					<div className="w-full  flex justify-center items-center">
						<Image  
							width={500}
							height={500}
							loading="lazy"
							src={img02}
							alt="Picture of the author"
						/>
					</div>
				</div>

			</div>

		

			<div className="w-full h-[500px] md:w-1/2 flex justify-center items-center HoarseSolid text-amber-50 text-6xl ">
				{title}
			</div>
			
    	</div>
  	)
}
