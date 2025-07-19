import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/cta";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section  ">
        <CompanionCard id='123' name="Neura the Brainy Explorer" topic="Neural Network of the brain" duration={45} subject="science" color="#ffda6e" />
        <CompanionCard id='456' name="Countsy the Number Wizard" topic="Derivated & Integrals" duration={30} subject="Maths" color="#d5e0ff" />
        <CompanionCard id='789' name="Verba the Vocabulary Builder" topic="Language" duration={30} subject="English Literature" color="#bde7ff" />
      </section>
      <section className="home-section">
        <CompanionList
        title="Recent Sessions"
        companions={recentSessions}
        classNames = 'w-2/3 max-lg:w-full'
        />
        <Cta/>
        
      </section>
    </main>
  );
};

export default Page;
