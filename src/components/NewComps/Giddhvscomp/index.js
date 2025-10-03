import styles from "./Giddhvscomp.module.scss";

export default function Giddhvscomp({ giddhvscomp }) {
  return (
    <section className="container py-5 outfit-font">
      <h1 className="text-center mb-4 garmond-font ">{giddhvscomp?.heading}</h1>
      <p className="text-center mb-4 w-75 mx-auto">{giddhvscomp?.subheading}</p>
      <div className={`text-center ${styles.giddhScrollWrapper} overflow-touch overflow-x-auto w-100 mp-1 d-inline-block`}>
        <div className={styles.giddhScrollInner}>

          <div className="bg-white border rounded overflow-hidden">
            <div className="row border-bottom fw-semibold c-fs-5 text-dark text-center">
              <div className="col-3 col-md-3 px-3 py-2 border-end">Feature</div>
              <div className="col-3 col-md-3 px-3 py-2 border-end">Giddh</div>
              <div className="col-3 col-md-3 px-3 py-2 border-end">Quick Books</div>
              <div className="col-3 col-md-3 px-3 py-2 border-end">Tally</div>
            </div>

            {giddhvscomp?.content?.map((row, index) => (
              <div key={index} className="row border-bottom c-fs-6 text-center">
                <div className="col-3 col-md-3 px-3 py-2 border-end">
                  {row?.feature}
                </div>
                <div className="col-3 col-md-3 px-3 py-2 border-end">
                  {row?.giddh}
                </div>
                <div className="col-3 col-md-3 px-3 py-2 border-end">
                  {row?.quickbooks}
                </div>
                <div className="col-3 col-md-3 px-3 py-2">
                  {row?.tally}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
