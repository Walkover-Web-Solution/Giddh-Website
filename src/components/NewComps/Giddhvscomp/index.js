import styles from "./Giddhvscomp.module.scss";

export default function Giddhvscomp({ giddhVsComp }) {
  return (
    <section className="container py-5 outfit-font">
      <div className="d-flex flex-column gap-4">
        <h1 className="text-center font-sub-heading font-400 garmond-font">{giddhVsComp?.heading}</h1>
        <p className="text-center font-md font-400 w-75 mx-auto">{giddhVsComp?.subheading}</p>
        <div className={`text-center ${styles.giddhScrollWrapper} overflow-touch overflow-x-auto d-inline-block`}>
          <div className={styles.giddhScrollInner}>

            <div className="bg-white border rounded overflow-hidden">
              <div className="row border-bottom font-md font-600 text-dark text-center">
                <div className="col-3 col-md-3 px-3 py-2 border-end">Feature</div>
                <div className="col-3 col-md-3 px-3 py-2 border-end">Giddh</div>
                <div className="col-3 col-md-3 px-3 py-2 border-end">Quick Books</div>
                <div className="col-3 col-md-3 px-3 py-2 border-end">Tally</div>
              </div>

              {giddhVsComp?.content?.map((row, index) => (
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
      </div>
    </section>
  )
}
