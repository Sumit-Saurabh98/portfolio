"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 4500); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-animate relative overflow-hidden">
      <p className="text-center px-4 max-w-3xl relative z-10 text-animate">
        I am enough of an artist to draw freely upon my imagination. Imagination is more important
        than knowledge. Knowledge is limited. Imagination encircles the world. 
        <span className="flex items-center justify-center py-2">
          A. Einstein
          <Image 
            className="rounded-full ml-2"
            src="/Einstein.png" 
            alt="Albert Einstein" 
            width={50}
            height={50}
            objectFit="contain"
          />
        </span>
      </p>
      <style jsx global>{`
        @keyframes backgroundChange {
          0% { background-color: black; }
          100% { background-color: white; }
        }
        @keyframes textChange {
          0% { color: white; }
          100% { color: black; }
        }
        .bg-animate {
          animation: backgroundChange 20s forwards;
        }
        .text-animate {
          animation: textChange 20s forwards;
        }
      `}</style>
    </div>
  );
}

