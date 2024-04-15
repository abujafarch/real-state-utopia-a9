import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay } from 'swiper/modules';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import 'animate.css'


const Slider = () => {
    return (
        <div className='md:mt-8 mt-4'>
            <Swiper
                navigation={{
                    nextEl: '.slide-next',
                    prevEl: '.slide-prev',
                    clickable: true
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                className='relative mySwiper rounded-md h-[600px] sm:h-[700px]'
            >
                <div className='absolute flex flex-col items-center w-full z-30 text-center top-[45%] -translate-x-1/2 -translate-y-1/2 left-1/2 px-5 '>
                    <div className='max-w-[700px] sm:mb-8 mb-2 animate__animated animate__fadeInUp'>
                        <h1 className='font-poppins text-[#F4A261] font-bold text-3xl md:text-4xl lg:text-6xl'>Discover your <span className='font-bungee text-2xl md:text-3xl lg:text-5xl text-[#2A9D8F]'>Utopia</span> home today</h1>
                    </div>
                    <div className='max-w-[700px] animate__animated animate__fadeInUp'>
                        <p className='object-fill text-white text-base md:text-lg font-poppins'>Find your perfect home with <span className='font-semibold'>Utopia</span>. Explore curated residential listings tailored to your needs. Start your homeownership journey effortlessly</p>
                    </div>
                    <button className='hover:bg-[#F4A261] transition duration-300 ease-in-out px-4 py-2 rounded-sm mt-10 font-semibold text-lg text-white hover:text-[#2A9D8F] border-[3px] border-[#F4A261] animate__animated animate__fadeInUp animate__delay-1s'>Explore Now</button>
                </div>

                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/9yv07XS/ban2.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/9ZwfJwZ/ban1.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/4TwsqzG/ban3.jpg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full'>
                        <img className='w-full h-full object-cover' src="https://i.ibb.co/nsxy6LH/ban4.jpg" />
                    </div>
                </SwiperSlide>

                <div className='w-full h-full z-10 absolute top-0 bg-[#00000070]'></div>

                <div className='flex gap-16 items-center justify-center absolute z-10 bottom-5 left-1/2 -translate-x-1/2'>
                    <div className='slide-prev hover:bg-[#f4a361d8] bg-transparent transition duration-300 p-1 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-[#2A9D8F] text-3xl border-2 border-[#F4A261]'>
                        <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
                    </div>
                    <div className='slide-next hover:bg-[#f4a361d8] bg-transparent transition duration-300 p-1 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-[#2A9D8F] text-3xl border-2 border-[#F4A261]'>
                        <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slider;