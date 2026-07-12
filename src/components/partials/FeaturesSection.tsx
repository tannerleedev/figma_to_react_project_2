
function FeaturesSection() {
    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-33 flex flex-col gap-10">
            <h3 className="text-2xl mx-auto">Featured in</h3>

            <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
                <div className="flex-1 flex flex-col rounded-4xl border-zinc-600 border">
                    <div className="flex-1 flex flex-col gap-4 px-10 py-10">
                        <h4 className="font-extrabold text-3xl">Mashable</h4>
                        <p className="text-2xl text-zinc-400">This ethereum-based project could change how we think about digital art</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-600 px-10 py-6">
                        <span className="text-xl">Read article</span>
                        <i className="fa-duotone fa-light fa-arrow-up-right text-xl hover:-translate-y-1 hover:translate-x-1 transition-transform cursor-pointer"></i>
                    </div>
                </div>

                <div className="flex-1 flex flex-col rounded-4xl border-zinc-600 border">
                    <div className="flex-1 flex flex-col gap-4 px-10 py-10">
                        <h4 className="font-extrabold text-3xl">Mashable</h4>
                        <p className="text-2xl text-zinc-400">CryptoKitties, CryptoPunks and the birth of a cottage industry
                        </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-600 px-10 py-6">
                        <span className="text-xl">Read article</span>
                        <i className="fa-duotone fa-light fa-arrow-up-right text-xl hover:-translate-y-1 hover:translate-x-1 transition-transform cursor-pointer"></i>
                    </div>
                </div>

                <div className="flex-1 flex flex-col rounded-4xl border-zinc-600 border">
                    <div className="flex-1 flex flex-col gap-4 px-10 py-10">
                        <h4 className="font-extrabold text-3xl">Mashable</h4>
                        <p className="text-2xl text-zinc-400">This ethereum-based project could change how we think about digital art</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-zinc-600 px-10 py-6">
                        <span className="text-xl">Read article</span>
                        <i className="fa-duotone fa-light fa-arrow-up-right text-xl hover:-translate-y-1 hover:translate-x-1 transition-transform cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection