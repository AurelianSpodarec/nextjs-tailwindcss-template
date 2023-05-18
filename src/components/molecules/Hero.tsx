import Image from "next/image";

function Hero({ title, description, image }:HeroProps) {
    return (
        <div className="relative h-[500px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/60 h-full w-full"></div>
            <Image src={image.url} alt={image.alt} className="w-full h-full object-cover" fill />

            <div className="absolute z-20 h-full w-full">
            <div className="flex justify-center items-center h-full w-full">

                <h1 className="text-white text-5xl font-bold">{title}</h1>
                {description && <p className="text-gray-700 text-md">{description}</p>}

            </div>
            </div>
        </div>
    )
}

export default Hero;

interface HeroProps {
    title: string;
    description?: string;
    image: {
        url: string;
        alt: string;
    }
}