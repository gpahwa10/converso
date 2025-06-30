import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={30}
          color="#E5D0FF"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="Englist Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionList title="Recently Completed Sessions" companions={recentSessions} classNames="w-2/3 max-lg:w-full"/>
        <Cta />
      </section>
    </main>
  );
};

export default Page;
