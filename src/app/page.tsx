import Home from "./Home/page";
import About from "./About/page";
import DemoBookingPage from "./Form/page";
import MachinesPage from "./Embroidery_Machines/page";
import Footer from "@/components/Fotter";
import Materials from "@/app/Materials/page" 
import Slide from "./Slide/page"
import FloatingActions from "@/components/Float";

export default function Page() {
  return (
    <div className="flex flex-col w-full overflow-x-clip relative">
      <Home />
      <Slide />
      <About />
      <DemoBookingPage />
      <MachinesPage />
      <Materials />
      <Footer />
      
      <FloatingActions />
    </div>
  );
}