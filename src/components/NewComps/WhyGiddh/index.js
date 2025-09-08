import whyGiddhData from './data.json';
import styles from './WhyGiddh.module.scss';

export default function WhyGiddh() {

  const data = {
    heading: "Why is Giddh better than most!",
    subheading: "In today's business landscape, understanding and managing the financial status of your organization are crucial for making informed business decisions and sustainable growth. This necessity applies not only to professional accountants but also to all professionals working in various industries.",
  };

  return (
    <section className="container py-4 mt-5">
       <h1 className="text-center mb-4"> {data?.heading} </h1>
       <p className="text-center mb-4 w-75 mx-auto"> {data?.subheading} </p>
      <div className={styles.whyGiddhContainer}>
        <div className={styles.tableContainer}>
        
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Feature</div>
            <div className={styles.headerCell}>Giddh</div>
            <div className={styles.headerCell}>MSG91</div>
          </div>
          
          <div className={styles.tableBody}>
            {whyGiddhData.map((row, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.featureCell}>
                  {row.Feature}
                </div>
                <div className={styles.giddhCell}>
                  {row.Giddh}
                </div>
                <div className={styles.competitorCell}>
                  {row.MSG91}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
