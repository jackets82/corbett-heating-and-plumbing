import Image from "next/image";

function About() {
  return (
    <div className=" bg-corbett-blue">
      <div className=" prose prose-xl mx-auto h-auto justify-center flex flex-col items-center relative gap-10 bg-corbett-blue py-32 px-10 md:px-0 text-center">
        <h2>About Us</h2>
        <div className=" h-48 w-48 rounded-full overflow-hidden border-4 border-corbett-green">
          <Image src="/avatar.jpg" height="1024" width="1024" />
        </div>
        <p className="text-corbett-green text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          facilis reprehenderit autem saepe, cupiditate molestias eaque unde
          consequatur nihil quia ipsa iusto voluptatum ad illo non quis
          assumenda qui! Molestias.
        </p>
      </div>
    </div>
  );
}

export default About;
