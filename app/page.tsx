import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/cta";
import { getAllCompanions, getSessionHistory } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getSessionHistory(10)

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section  ">
        {companions.map((companion)=>(
          <CompanionCard key={companion.id} {...companion} color={getSubjectColor(companion.subject)}/>
        ))}
      </section>
      <section className="home-section">
        <CompanionList
        title="Recent Sessions"
        companions={recentSessionCompanions}
        classNames = 'w-2/3 max-lg:w-full'
        />
        <Cta/>
        
      </section>
    </main>
  );
};

export default Page;
