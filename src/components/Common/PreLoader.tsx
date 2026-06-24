import React from "react";
import Image from "next/image";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-[var(--brutal-bg)]">
      <div className="relative flex flex-col items-center justify-center gap-4">
        <div className="h-20 w-20 rounded-none border-4 border-[var(--brutal-black)] border-t-[var(--brutal-yellow)] animate-spin" />
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/mega-orbit-icon.png"
            alt="Mega Orbit"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          <span className="font-black text-xl tracking-[0.3em] text-[var(--brutal-black)]">MEGA ORBIT</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
