import { Button } from "../ui/button"

export const CTASection = () => {
    return (
        <section className="bg-[#C3F276]">
            <div className="flex flex-col items-center text-center justify-center py-44 max-section">
                <h1 className="text-7xl leading-[80px]">Connect with a Global <br /> Community</h1>
                <p className="text-4xl w-[1000px] leading-[50px] pt-16 pb-10">Iron Fish is open-source and community-focused. Join us on Discord and connect with a lively and highly-engaged collective.</p>
                <Button icon="arrow" variant="secondary">
                    Join Our Community
                </Button>
            </div>
        </section>
    )
}