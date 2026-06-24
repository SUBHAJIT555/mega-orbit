import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  iconSize?: number;
  textClassName?: string;
};

const Logo = ({
  className = "",
  iconSize = 36,
  textClassName = "text-xl sm:text-2xl font-black tracking-tight text-[var(--brutal-black)]",
}: LogoProps) => {
  return (
    <Link className={`flex-shrink-0 flex items-center gap-2.5 ${className}`} href="/">
      <Image
        src="/images/logo/mega-orbit-icon.png"
        alt="Mega Orbit"
        width={iconSize}
        height={iconSize}
        className="object-contain"
        priority
      />
      <span className={textClassName}>
        MEGA <span className="text-[var(--brutal-cyan)]">ORBIT</span>
      </span>
    </Link>
  );
};

export default Logo;
