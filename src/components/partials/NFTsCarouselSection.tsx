import nft1 from '../../assets/images/NFTs/nft-1.png';
import nft2 from '../../assets/images/NFTs/nft-2.png';
import nft3 from '../../assets/images/NFTs/nft-3.png';
import nft4 from '../../assets/images/NFTs/nft-4.png';
import nft5 from '../../assets/images/NFTs/nft-5.png';
import nft6 from '../../assets/images/NFTs/nft-6.png';
import nft7 from '../../assets/images/NFTs/nft-7.png';
import nft8 from '../../assets/images/NFTs/nft-8.png';

function NFTsCarouselSection() {
    return (
        <div className="w-full mx-auto py-8 overflow-hidden">
            <div className='flex w-max items-center justify-center gap-14 animate-logo-carousel'>
                <img className='shrink-0' src={nft1} alt="NFT1" />
                <img className='shrink-0' src={nft2} alt="NFT2" />
                <img className='shrink-0' src={nft3} alt="NFT3" />
                <img className='shrink-0' src={nft4} alt="NFT4" />
                <img className='shrink-0' src={nft5} alt="NFT5" />
                <img className='shrink-0' src={nft6} alt="NFT6" />
                <img className='shrink-0' src={nft7} alt="NFT7" />
                <img className='shrink-0' src={nft8} alt="NFT8" />
                <img className='shrink-0' src={nft1} alt="NFT1" />
                <img className='shrink-0' src={nft2} alt="NFT2" />
                <img className='shrink-0' src={nft3} alt="NFT3" />
                <img className='shrink-0' src={nft4} alt="NFT4" />
                <img className='shrink-0' src={nft5} alt="NFT5" />
                <img className='shrink-0' src={nft6} alt="NFT6" />
                <img className='shrink-0' src={nft7} alt="NFT7" />
                <img className='shrink-0' src={nft8} alt="NFT8" />
            </div>
        </div>
    )
}

export default NFTsCarouselSection