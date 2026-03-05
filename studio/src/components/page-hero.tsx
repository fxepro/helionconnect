import Image from 'next/image';
import { type ImagePlaceholder } from '@/lib/placeholder-images';

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: ImagePlaceholder;
};

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full">
       <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover"
        data-ai-hint={image.imageHint}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <div className="max-w-4xl">
            <h1 className="font-headline text-4xl md:text-6xl font-bold">
            {title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-300">
            {subtitle}
            </p>
        </div>
      </div>
    </section>
  );
}
