import { fullname } from '@/app/data/base';
import About from '@/app/ui/About';
import { Metadata } from 'next';

type Props = {};

const page = (props: Props) => {
  return <About />;
};

export const metadata: Metadata = {
  title: 'About',
  description: `About ${fullname}`,
};

export default page;
