import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import 'swiper/css';

import transNFT1 from '../../assets/images/transactions/trans-1.png';
import transNFT2 from '../../assets/images/transactions/trans-2.png';
import transNFT3 from '../../assets/images/transactions/trans-3.png';
import transNFT4 from '../../assets/images/transactions/trans-3.png';
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function RecentTransactionsSection() {

    const swiperRef = useRef<SwiperType | null>(null);
    const isDesktop = useMediaQuery({ minWidth: 800 })

    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-10 flex flex-col gap-10">

            <div className="flex items-center justify-between">
                <h3 className="text-3xl sm:text-5xl font-medium">Recent Transactions</h3>
                <button className="border border-zinc-400 sm:px-10 px-6 py-3 sm:py-4 rounded-full sm:text-xl font-medium">View all</button>
            </div>

            <p className="-mt-8 mb-10 sm:text-xl text-zinc-500">Updated 25 seconds ago</p>

            <div className="w-full">
                <Swiper
                    className='w-full'
                    slidesPerView={isDesktop ? 3.3 : 1.1}
                    spaceBetween={isDesktop ? 30 : 15}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={transNFT1} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#9865</h4>
                            <p className="text-xl mb-3">New bid of $750.652</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={transNFT2} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#3574</h4>
                            <p className="text-xl mb-3">New bid of $7.56M</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={transNFT3} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#9856</h4>
                            <p className="text-xl mb-3">New bid of $10.26M</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={transNFT4} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#2564</h4>
                            <p className="text-xl mb-3">New bid of $2.28M</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="flex items-center gap-8">
                <button className="border border-zinc-400 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer" onClick={() => swiperRef.current?.slidePrev()}><i className="fa-duotone fa-regular fa-arrow-left text-2xl"></i></button>
                <button className="border border-zinc-400 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer" onClick={() => swiperRef.current?.slideNext()}><i className="fa-duotone fa-regular fa-arrow-right text-2xl"></i></button>
            </div>

        </section>
    )
}

export default RecentTransactionsSection