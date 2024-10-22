import { fullname } from '@/app/data/base';
import Contact from '@/app/ui/Contact';
import { Metadata } from 'next';

type Props = {};

const ContactPage = (props: Props) => {
  return <Contact />;
};

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${fullname}`,
};

export default ContactPage;
