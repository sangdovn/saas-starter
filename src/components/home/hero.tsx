import { ArrowRight, Gift } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 p-8 lg:flex-row lg:gap-24 lg:py-24">
      <div className="flex flex-col items-center gap-6 lg:items-start lg:gap-12">
        <h1 className="flex flex-col items-center text-4xl font-extrabold tracking-tight lg:items-start lg:text-6xl">
          <span>Leading the world</span>
          <span>
            with <span>AI</span>
          </span>
        </h1>
        <p className="text-center text-lg leading-relaxed opacity-80 lg:text-start">
          Discover innovative solutions that harness the power of artificial
          intelligence to transform your business.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 lg:items-start">
          <Button className="cursor-pointer bg-blue-700 !px-20 !py-6 text-white hover:bg-blue-800">
            Get Titanix <ArrowRight />
          </Button>
          <p className="flex items-center justify-center gap-1 text-sm lg:justify-start">
            <Gift className="text-green-500" />
            <span className="text-green-500">$100 off</span>
            <span> for the first 8683 customer (12 left)</span>
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center lg:max-w-1/2">
        <Image src="/hero.png" alt="Hero Image" width={1080} height={1920} />
      </div>
    </section>
  );
}
