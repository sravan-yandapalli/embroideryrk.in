import Navbar from "@/components/Navabar";
import Home from "./Home/page";
import About from "./About/page";
import DemoBookingPage from "./Form/page";
import MachinesPage from "./Embroidery_Machines/page";
import Fotter from "./Fotter/page";

export default function Page() {
  return (
    <main className="min-h-[80vh]">
      <Navbar />
      <Home />
      <About />
      <DemoBookingPage/>
      <MachinesPage/>
      <Fotter/>
    </main>
  );
}