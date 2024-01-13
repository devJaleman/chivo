'use client'
import Image from 'next/image'
import img01 from '../../../../public/img/index/section01img01.webp'
import img02 from '../../../../public/img/index/section01img02.webp'
export default function Section01() {
	let textTitle = "TACOS,	BURRITOS, PUPUSAS	Y MAS.";
	let textBtn = "ORDER HERE";
  	return (
    	<div className="w-full h-[600px]  bg-amber-500 flex  flex-col md:flex-row">
			<div className="w-full h-full  md:hidden">
				<div className="w-full h-full flex  flex-col items-center justify-center">
					<div className="w-[300px] h-[175px]" >
						<Image  
							width={300}
							height={175}
							loading="lazy"
							src={img01}
							alt="Picture of the author"
						/>
					</div>
					<div className="SunMore text-orange-700 text-5xl text-center w-[300px] mt-10 mb-10">
						{textTitle}
					</div>
					<a target="_blank" href="https://www.clover.com/online-ordering/chivo-taqueria-cambridge" 
						className="w-[240px] bg-slate-800 h-[60px] text-white rounded-full RockGrotesk flex items-center justify-center text-xl tracking-[5px]"> 
						{textBtn} 
					</a>
				</div>
			</div>
			<div className="w-full h-full hidden md:block">
				<div className="w-full h-full flex flex-row">
					<div className="h-full w-1/2 flex items-center justify-center">
						<div className="flex flex-col items-center">
							<div className="SunMore text-orange-700 text-5xl text-center w-[300px]  mb-10">
							{textTitle}
							</div>
							<a target="_blank" href="https://www.clover.com/online-ordering/chivo-taqueria-cambridge" 
								className="w-[240px] bg-slate-800 h-[60px] text-white rounded-full RockGrotesk flex items-center justify-center text-xl tracking-[5px]"> 
								{textBtn} 
							</a>
						</div>
					</div>
					<div className="h-full w-1/2 flex justify-end items-center  xl:justify-start " >
						<div className="w-[500px] h-[400px] xl:hidden" >
							<Image  
								  width={500}
								  height={400}
								  loading="lazy"
								  src={img02}
								  alt="Picture of the author"
							/>
						</div>
						<div className="w-[600px] h-[350px] hidden xl:block" >
							<Image  
								  width={600}
								  height={350}
								  loading="lazy"
								  src={img01}
								  alt="Picture of the author"
							/>
						</div>
					</div>
				</div>
			</div>
    	</div>
  	)
}
