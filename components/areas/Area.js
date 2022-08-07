import Image from "next/image";

function Area({ title, text }) {
  return (
    <div className=" bg-white bg-opacity-20 backdrop-blur-lg h-[500px] justify-center flex items-center rounded-md prose flex-col overflow-hidden">
      <div className="relative h-full w-full">
        <Image
          src="/scenery.jpg"
          //   height="4672"
          //   width="7000"
          objectFit="cover"
          layout="fill"
          objectPosition="top"
        />
      </div>
      <div className=" px-3 text-center">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Area;
