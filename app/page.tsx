import { Metadata } from 'next';
import Hero from './ui/Hero';
import { fullname, description, titles, CVLink } from '@/app/lib/loadBase';
import socials from '@/app/lib/loadSocials';

export default function Home() {
  return (
    <div>
      <Hero
        socials={socials}
        fullname={fullname}
        titles={titles}
        CVLink={CVLink}
      />
    </div>
  );
}
export const metadata: Metadata = {
  title: `${fullname} | Home`,
  description: description,
};
