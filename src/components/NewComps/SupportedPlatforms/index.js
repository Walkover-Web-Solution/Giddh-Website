export default function SupportedPlatforms({ supportedPlatforms }) {
    return (
        <section className="py-5 bg-dark">
            <div className="container d-flex flex-column gap-4">
                <h2 className="font-sub-heading garmond-font text-center font-white">
                    {supportedPlatforms?.heading}
                </h2>
                <div className="d-flex flex-row justify-content-between align-items-center gap-4">
                    {supportedPlatforms?.platforms?.map((platform, index) => (
                        <div className="d-flex flex-column gap-3" key={index}>
                            <img src={platform?.image} alt={platform?.name} />
                            <p className="font-white font-md text-center">{platform?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}