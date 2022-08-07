import About from "../components/About";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Areas from "../components/areas/Areas";

export default function index() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <div className=" bg-blue-600 flex-grow">
        <About />
        <Areas />
        <div>Services</div>
      </div>
      <Footer />
    </div>
  );
}
