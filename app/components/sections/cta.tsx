import { Button } from "../ui/button"

export const CTASection = () => {
    return (
        <section className="bg-[#C3F276]">
            <div className="flex flex-col md:items-center items-start md:text-center text-left justify-center md:py-44 py-24 max-section md:px-0 px-6">
                <h1 className="md:text-7xl text-4xl md:leading-[80px] leading-[50px]">Connect with a Global <br /> Community</h1>
                <p className="md:text-4xl text-[1.2rem] md:w-[1000px] w-full md:leading-[50px] leading-[30px] md:pt-16 pt-10 md:pb-10 pb-5">Iron Fish is open-source and community-focused. Join us on Discord and connect with a lively and highly-engaged collective.</p>
                <Button icon="arrow" variant="secondary" size="sm">
                    Join Our Community
                </Button>
            </div>
        </section>
    )
}