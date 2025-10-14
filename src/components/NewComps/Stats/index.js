export default function Stats({ stats }) {
  if (!stats?.stats?.length) return null;

  return (
    <section className="py-5 outfit-font bg-accent">
      <div className="container d-flex flex-column gap-4">
        <h2 className="garmond-font font-sub-heading text-center font-white">
          {stats?.heading}
        </h2>
        <div className="row justify-content-center g-2">
          {stats.stats.map((stat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 d-flex">
              <div
                className="w-100 d-flex flex-column align-items-center justify-content-center
                           border border-white rounded-2 py-4 px-3 h-100 text-center font-white"
              >
                <div className="font-600 font-xxl">{stat?.value}</div>
                <div className="font-sm">{stat?.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
