import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/Helion-Connect-logo.png"
      alt="Helion Connect"
      width={180}
      height={48}
      className={cn('h-auto', className)}
      priority
    />
  );
}
