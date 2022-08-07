import Area from "./Area";

function areas() {
  return (
    <div className=" bg-corbett-green py-24">
      <div className=" prose text-center mx-auto pb-20 prose-xl">
        <h2>Areas we cover</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum
          suscipit eveniet voluptatum quibusdam aperiam aspernatur temporibus
          ipsam neque nihil, voluptatibus cumque hic repellendus accusantium
          architecto facere nam labore quidem.
        </p>
      </div>
      <div className=" bg-corbett-green grid md:grid-cols-3 px-5 items-center gap-3 max-w-5xl mx-auto">
        <Area
          title="Area 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <Area
          title="Area 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <Area
          title="Area 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      </div>
    </div>
  );
}

export default areas;
