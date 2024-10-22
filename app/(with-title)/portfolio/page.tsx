import { fullname } from '@/app/data/base';
import { loadYaml } from '@/app/lib/loadYaml';
import Projects from '@/app/ui/Projects';
import { Metadata } from 'next';

type Props = {};

const Portfolio = (props: Props) => {
  const data = loadYaml('projects.yml');
  return <Projects categories={data.categories} projects={data.projects} />;
};

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `${fullname}'s Projects`,
};

export default Portfolio;
