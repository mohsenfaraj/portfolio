import { fullname } from '@/app/lib/loadBase';
import About from '@/app/ui/About';
import { Metadata } from 'next';
import cards from '@/app/lib/loadAbout';

type Props = {};

const page = (props: Props) => {
  return <About cards={cards} />;
};

export const metadata: Metadata = {
  title: 'About',
  description: `About ${fullname}`,
};

export default page;
