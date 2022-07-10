import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main body/Main";

export default function index() {
  return (
    <div className="bg-red-400 h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
