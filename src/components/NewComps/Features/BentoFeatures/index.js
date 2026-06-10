import Link from "next/link";
import * as MdIcons from "react-icons/md";
import { MdNorthEast } from "react-icons/md";
import styles from "./BentoFeatures.module.scss";

function FeatureCard({ feature, index }) {
  const Icon = MdIcons[feature.icon];

  return (
    <div
      className={`col-12 ${
        index === 0 || index === 3 ? "col-md-7" : "col-md-5"
      }`}
    >
      <div className={`${styles.card} d-flex flex-column gap-2 h-100`}>
        <div
          className={`${styles.iconBox} d-flex align-items-center justify-content-center`}
        >
          {Icon && <Icon size={20} />}
        </div>

        <h3 className="font-primary font-md font-600 m-0">{feature.name}</h3>
        <p className="font-slate-grey font-sm m-0">{feature.description}</p>

        {feature.tags?.length > 0 && (
          <div className="d-flex flex-wrap gap-1 mt-auto pt-1">
            {feature.tags.map((tag, index) => (
              <Link
                key={index}
                href={tag.href || "#"}
                className={styles.tag}
              >
                {tag.label}
                {tag.arrow && <MdNorthEast size={12} />}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BentoFeatures({ features }) {
  if (!features?.length) return null;

  return (
    <section className="py-5 outfit-font">
      <div className="container d-flex flex-column gap-4">
        <h2 className="font-sub-heading text-center garmond-font m-0">
          <span className="font-primary">Giddh Features</span> That Make
          Business Easy
        </h2>

        <div className="row g-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.name}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
