import sampleNFT1 from '../../assets/images/sample-nft-1.png';

function MeetThePunksSection() {
    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-10 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row items-start gap-12">
                <h3 className="flex-1 text-5xl">Meet the Punks</h3>
                <div className="flex-1">
                    <p className="text-xl">The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status.</p>

                    <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                        <button className="w-fit bg-white rounded-full px-10 py-3.5 text-zinc-900 text-xl font-medium cursor-pointer">Buy a Punk</button>
                        <button className="border border-zinc-500 px-10 py-3.5 rounded-full text-xl font-medium cursor-pointer">View full collection</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-center gap-12 my-10'>
                <div className='flex-1 flex flex-col gap-8'>
                    <div className='max-w-140 border border-zinc-400 rounded-3xl px-6 py-8 text-2xl bg-main'>
                        Punks with a blue background are not for sale and have no current bids.
                    </div>
                    <div className='max-w-140 border border-zinc-400 rounded-3xl px-6 py-8 text-2xl'>
                        Punks with a red background are available for sale by their owner.
                    </div>
                    <div className='max-w-140 border border-zinc-400 rounded-3xl px-6 py-8 text-2xl'>
                        Punks with a purple background have an active bid on them
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-full md:max-w-120' src={sampleNFT1} alt="Sample NFT" />
                </div>
            </div>
        </section>
    )
}

export default MeetThePunksSection