import Image from "next/image";
import styles from "./OurClients.module.scss";

export default function OurClient() {
  const data = {
    heading: "Some of Our Esteemed Clients",
    subheading:
      "Here’s a glimpse at some of the amazing businesses that choose Giddh to manage their finances.",
    clients: [
      {
        name: "RackBank",
        logo: "/img/our-clients/rackbank-logo.webp",
        website: "https://www.rackbank.com/",
        description: "Datacenter Accounting",
      },
      {
        name: "MSG91",
        logo: "/img/our-clients/msg91-logo.webp",
        website: "https://msg91.com/",
        description: "SaaS Accounting",
      },
      {
        name: "Mitti",
        logo: "/img/our-clients/mitti-logo.webp",
        website: "https://mitti.cafe/",
        description: "Restaurant Accounting",
      },
    ],
  };

  if (!data?.clients?.length) return null;

  return (
    <>
      <section className="container section_py d-flex flex-column gap-4">
        <div className="d-flex flex-column text-center content-width mx-auto">
          <h2 className="sub-heading c-fw-600 col-primary ">{data?.heading}</h2>
          <p>{data?.subheading}</p>
        </div>
        <div className={`${styles.clients} d-flex flex-md-row flex-column align-items-center gap-0 justify-content-center gap-md-5 `}>
          {data.clients.map((client) => {
            return (
              <a
              
                key={client?.name}
                href={client?.website}
                target="_blank"
                className={styles.clients_cont}
                aria-label={`Visit ${client?.name} website`}
              >
                <Image
                  className={`${styles.clients_img} w-100 h-fit-content`}
                  src={client?.logo}
                  alt={client?.name}
                  width="360"
                  height="360"
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
