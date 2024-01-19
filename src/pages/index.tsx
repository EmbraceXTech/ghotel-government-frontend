import LandingHeader from "@/components/landings/LandingHeader";
import LandingProgress from "@/components/landings/LandingProgress";
import RegisterSelector from "@/components/landings/RegisterSelector";

export default function Home() {
  return (
    <main className="w-full h-full">
      <LandingHeader />
      <div className="w-full h-full bg-white rounded-t-[40px] flex items-center flex-col">
        <LandingProgress />
        <RegisterSelector />
      </div>
    </main>
  );
}
