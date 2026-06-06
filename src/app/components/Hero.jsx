import Marquee from 'react-fast-marquee';
import Hero from '../../../hero.json'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
    return (
        <div>
            <div className="className='bg-base-100 py-10 text-[#5C1D24]'">

                <div className="max-w-6xl mx-auto px-4">



                    <div className="bg-amber-100 py-2.5 rounded-full mb-8 overflow-hidden border border-amber-200">
                        <Marquee gradient={false} speed={50} className="text-xs font-bold tracking-widest uppercase">
                            <span className="mx-8">☀️ Summer Sale 50% OFF! ☀️</span>
                            <span className="mx-8">🔥 Hot Deals Live Now 🔥</span>
                            <span className="mx-8">🌿 Pure Premium Comfort 🌿</span>
                            <span className="mx-8">☀️ Summer Sale 50% OFF! ☀️</span>
                            <span className="mx-8">🔥 Hot Deals Live Now 🔥</span>
                        </Marquee>
                    </div>

                </div>
                <div className="w-250 mx-auto">
                    <DotLottieReact
                        data={Hero}
                        loop
                        autoplay
                    />
                </div>


            </div>
        </div>
    );
};

export default HeroSection;