import { FeaturesCard } from "../ui/features-card"

export const FeaturesSection = () => {
    const featuresData = [
        {
            title: "Safe, Accessible Wallets",
            desc: "Iron Fish enables safe, private transactions in the decentralized economy.",
            cards: [
                {
                    cardTitle: "The Node App",
                    cardDesc: "Send, receive and bridge assets from your desktop while running your own node.",
                    btnText: "Download here",
                    image: "/images/node-app.webp"
                },
                {
                    cardTitle: "OreoWallet",
                    cardDesc: "Make secure and private transactions right from your browser.",
                    btnText: "Install OreoWallet",
                    image: "/images/oreowallet.webp"
                },
            ]
        },
        {
            title: "Bi-Directional Bridging",
            desc: "Iron Fish's advanced privacy features are accessible across 20+ EVM-compatible chains.",
            cards: [
                {
                    cardTitle: "The Node App",
                    cardDesc: "Send, receive and bridge assets from your desktop while running your own node.",
                    btnText: "Download here",
                    image: "/images/chainport.webp"
                },
                {
                    cardTitle: "OreoWallet",
                    cardDesc: "Make secure and private transactions right from your browser.",
                    btnText: "Install OreoWallet",
                    image: "/images/iron-eth.webp"
                },
            ]
        },
    ]
    return (
        <section className="bg-black mt-24">
            <div className="max-section flex flex-col items-center justify-center text-center md:px-0 px-6">
            <div className="flex flex-col gap-[200px] my-28">
                {featuresData.map((f, i) => (
                    <div className="flex flex-col gap-20" key={i}>
                        <div className="flex flex-col text-center justify-center items-center">
                        <h1 className="text-white text-6xl font-light">{f.title}</h1>
                        <p className="text-gray-300 md:text-2xl text-[1.4rem] md:w-[600px] w-full pt-12 text-center">{f.desc}</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-10">
                            {f.cards.map((c, i) => (
                                <FeaturesCard key={i} title={c.cardTitle} desc={c.cardDesc} btnText={c.btnText} image={c.image} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}