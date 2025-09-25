
export default function Stats({ stats }) {
  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="container d-flex flex-column gap-4">
        <h2 className="c-fw-400 garmond-font sub-heading text-center text-white">{stats?.heading}</h2>
        <div className="row justify-content-center g-2">
          {stats?.stats?.map((s, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 d-flex">
              <div
                className="w-100 d-flex flex-column align-items-center justify-content-center
                           border border-white rounded-2 py-4 px-3 h-100 text-center">
                <div className="text-white fw-bold fs-1">{s?.value}</div>
                <div className="text-white fs-6">{s?.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
