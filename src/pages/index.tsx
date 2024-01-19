import LandingHeader from "@/components/landings/LandingHeader";
import LandingProgress from "@/components/landings/LandingProgress";
import LandingRegisterSelector from "@/components/landings/LandingRegisterSelector";
import LandingType from "@/components/landings/LandingType";

export default function Home() {
  return (
    <main>
      <LandingHeader />
      <div className="w-full bg-white rounded-t-[40px] flex items-center flex-col pb-12">
        <div className="w-[855px]">
          <LandingProgress />
          <LandingRegisterSelector />
          <LandingType />
        </div>
      </div>
    </main>
  );
}
