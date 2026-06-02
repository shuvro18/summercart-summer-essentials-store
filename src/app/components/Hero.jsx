import Marquee from 'react-fast-marquee';
import Hero from '../../../hero.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
    return (
        <div className='bg-base-100'>
            <div className="container mx-auto">
                <div>
                    <Marquee> <p className='text-center md:text-3xl lg:text-6xl py-5'> It Is Time For You To SHOPING </p> </Marquee>
                    <div className="mx-auto">
                        <DotLottieReact
                            data={Hero}
                            loop
                            autoplay
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;