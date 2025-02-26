import Image from "next/image";

interface LogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  padding?: string;
}

const Logo = ({ src, alt, width = 200, height = 200, padding = "p-4" }: LogoProps) => {
  return (
    <div className={`w-full h-full flex flex-col justify-center items-center overflow-hidden ${padding}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="hover:scale-105 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default Logo;