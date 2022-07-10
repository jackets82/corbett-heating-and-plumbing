import Image from "next/image"

function Price({service, price, image}) {
  return (
    <div className=" bg-red-500 h-60 w-96 flex items-center justify-center rounded shadow-md flex-col overflow-hidden">
        <div className=" h-2/3 bg-white w-full relative -top-7"> 
        <Image src={`/${image}.jpg`} width={500} height={500} />
        </div>
        
        <p className=" z-10 bg-white  w-full h-1/3 flex justify-center items-center">{service} : £{price}</p>
    </div>
  )
}

export default Price