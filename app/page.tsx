import { Metadata } from 'next';
import Hero from './ui/Hero';
import { description, fullname } from './data/base';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
export const metadata: Metadata = {
  title: `${fullname} | Home`,
  description: description,
};
