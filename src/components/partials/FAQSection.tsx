
function FAQSection() {
    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-30 flex flex-col gap-10">
            <h3 className="flex-1 text-4xl md:text-5xl">Details and FAQ</h3>
            <div className="flex flex-col gap-15">
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t border-zinc-400 pt-8">
                    <p className="flex-1 text-xl font-medium">Where are the images for the punks stored?</p>
                    <p className="flex-1 text-lg text-zinc-400">When originally released, the actual images of the punks were too large to store on the blockchain, so we took a hash of the <strong className="text-white">composite image</strong> of all the punks and <strong className="text-white">embeded it into the contract</strong>. You can verify that the punks being managed by the Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an SHA256 hash on the cryptopunks image and comparing it to the hash stored in the contract.Since then, due to some clever compression ideas and some help from friends of the punks we have managed to put the entire image and attribute data fully on chain. You can read more about the mechanisms and details of the process in the <a href="#" className="underline">announcement blog post</a>.</p>
                </div>

                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t border-zinc-400 pt-8">
                    <p className="flex-1 text-xl font-medium">Where are the images for the punks stored?</p>
                    <p className="flex-1 text-lg text-zinc-300">No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, that means it doesn't comply with any standards. They are almost an <a href="#" className="underline">ERC20 token</a>. We support the methods that provide your balance so you can watch CryptoPunks as a token in your wallet and see how many you own. None of the other methods are the same since you're not transferring a simple balance, but need to reference which specific Punk you want to work with.</p>
                </div>

                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t border-zinc-400 pt-8">
                    <p className="flex-1 text-xl font-medium">Where are the images for the punks stored?</p>
                    <p className="flex-1 text-lg text-zinc-300">The prices, bids and sales you see on this site are loaded from the Cryptopunks contract on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard (and all third party NFT marketplaces) we also needed to write a market so the punks could be transacted. We have no control over the contract governing this market, and have no access to any additional data beyond what the blockchain provides. In fact anyone else could write a web front end for it.
                    </p>
                </div>

                <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between border-t border-zinc-400 pt-8">
                    <p className="flex-1 text-xl font-medium">Where are the images for the punks stored?</p>
                    <p className="flex-1 text-lg text-zinc-300">No. We charge no fees for Cryptopunks transacted through the built-in market beyond the ones charged by Ethereum (gas).The contract source and more technical details are available <a href="#" className="underline">on Github</a>.</p>
                </div>
            </div>
        </section>
    )
}

export default FAQSection