"use client";
import styles, { layout } from "../styles.tsx";
import { features } from "../constants/index.tsx";
import { Button } from "./Button.tsx";
import FeatureCard from "./FeatureCard.tsx";

interface BusinessProps {
  
}

const Business: React.FC<BusinessProps> = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="mt-10">
          <Button />
        </div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            index={index}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
