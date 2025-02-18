import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Top from './components/top/top';
export default function page() {
  return(
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Top />
      <Navbar />
      <Footer />
    </div>
  );
}