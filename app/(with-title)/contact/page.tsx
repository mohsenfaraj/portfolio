import { fullname } from '@/app/lib/loadBase';
import Contact from '@/app/ui/Contact';
import { Metadata } from 'next';
import { contactAPI, email, telegram } from '@/app/lib/loadBase';
type Props = {};

const ContactPage = (props: Props) => {
  return <Contact contactAPI={contactAPI} email={email} telegram={telegram} />;
};

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${fullname}`,
};

export default ContactPage;
