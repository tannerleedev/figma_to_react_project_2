
function HeroSection() {
    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-33 text-center flex flex-col gap-10">
            <h2 className="text-4xl sm:text-5xl leading-12 sm:leading-15">
                The project that inspired the modern <span className="font-bold">CryptoArt movement</span>
            </h2>
            <p className="max-w-2xl text-xl text-zinc-300 font-light mx-auto leading-8">10,000 unique collection characters with proof of ownership stored on the Ethereum blockchain</p>
            <button className="w-fit mx-auto bg-white rounded-full px-10 py-3.5 text-zinc-900 text-xl cursor-pointer">Mint <span className="font-bold">now</span></button>
        </section>
    )
}

export default HeroSection