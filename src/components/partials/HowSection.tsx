import metaMaskLogo from "../../assets/images/metamask.png";
import ethereumLogo from "../../assets/images/ethereum.png";

function HowSection() {
    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-30 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start gap-12">
                <h3 className="flex-1 text-4xl md:text-5xl">How do I get a Punk</h3>
                <div className="flex-1 flex flex-col gap-20 pl-7 md:pl-0">
                    <div className="relative">
                        <p className="absolute top-0 w-13 h-13 border border-zinc-300 rounded-full flex items-center justify-center -translate-x-1/2 text-xl">1</p>
                        <div className="absolute top-16 h-full border-l border-zinc-500"></div>
                        <div className="pl-15 pt-1 flex flex-col items-start gap-5">
                            <img className="w-fit" src={metaMaskLogo} alt="Meta Mask" />
                            <h4 className="font-medium text-2xl">Download and install MetaMask</h4>
                            <p className="text-xl text-zinc-300">Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorise) access to your Ethereum account.</p>
                            <button className="border border-zinc-500 px-10 py-3.5 rounded-full text-lg md:text-xl font-medium cursor-pointer">Download MetaMask</button>
                        </div>
                    </div>

                    <div className="relative">
                        <p className="absolute top-0 w-13 h-13 border border-zinc-300 rounded-full flex items-center justify-center -translate-x-1/2 text-xl">2</p>
                        <div className="absolute top-16 h-full border-l border-zinc-500"></div>
                        <div className="pl-15 pt-1 flex flex-col items-start gap-5">
                            <img className="w-fit" src={ethereumLogo} alt="Ethereum" />
                            <h4 className="font-medium text-2xl">Buy some Ethereum</h4>
                            <p className="text-xl text-zinc-300">If you made a new account, buy some Ethereum. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</p>
                        </div>
                    </div>

                    <div className="relative">
                        <p className="absolute top-0 w-13 h-13 border border-zinc-300 rounded-full flex items-center justify-center -translate-x-1/2 text-xl">3</p>

                        <div className="pl-15 pt-1 flex flex-col items-start gap-5">
                            <h4 className="font-medium text-2xl">Start bidding, buying and selling</h4>
                            <p className="text-xl text-zinc-300">Once you have the plugin installed, this website will recognise it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowSection