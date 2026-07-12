import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import 'swiper/css';

import saleNFT1 from '../../assets/images/sales/sales-1.png';
import saleNFT2 from '../../assets/images/sales/sales-2.png';
import saleNFT3 from '../../assets/images/sales/sales-3.png';
import saleNFT4 from '../../assets/images/sales/sales-4.png';
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function LatestSalesSection() {

    const swiperRef = useRef<SwiperType | null>(null);
    const isDesktop = useMediaQuery({ minWidth: 800 })

    return (
        <section className="max-w-360 container mx-auto px-6 sm:px-10 py-20 flex flex-col gap-10">

            <div className="flex items-center justify-between">
                <h3 className="text-3xl sm:text-5xl font-medium">Latest Sales</h3>
                <button className="border border-zinc-400 sm:px-10 px-6 py-3 sm:py-4 rounded-full sm:text-xl font-medium">View all</button>
            </div>

            <div className="w-full">
                <Swiper
                    className='w-full'
                    slidesPerView={isDesktop ? 3.3 : 1.1}
                    spaceBetween={isDesktop ? 30 : 15}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                >
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={saleNFT1} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#3100</h4>
                            <p className="text-xl mb-3">$7.58M</p>
                            <span className="text-zinc-600">Mar 11, 2021</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={saleNFT2} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#7408</h4>
                            <p className="text-xl mb-3">$7.56M</p>
                            <span className="text-zinc-600">Mar 11, 2021</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={saleNFT3} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#4156</h4>
                            <p className="text-xl mb-3">$10.26M</p>
                            <span className="text-zinc-600">Dec 10, 2021</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="mb-6 w-full" src={saleNFT4} alt="Sale NFT" />
                            <h4 className="text-2xl font-medium">#8564</h4>
                            <p className="text-xl mb-3">$2.28M</p>
                            <span className="text-zinc-600">Jun 11, 2022</span>
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

export default LatestSalesSection