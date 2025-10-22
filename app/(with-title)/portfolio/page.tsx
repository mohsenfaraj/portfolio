import { fullname } from '@/app/lib/loadBase';
import { loadYaml } from '@/app/lib/loadYaml';
import Projects from '@/app/ui/Projects';
import { Metadata } from 'next';

type Props = {};

const Portfolio = (props: Props) => {
  const { projects } = loadYaml('projects.yml');
  const { categories } = loadYaml('categories.yml');
  return <Projects categories={categories} projects={projects} />;
};

export const metadata: Metadata = {
  title: 'Portfolio',
  description: `${fullname}'s Projects`,
};

export default Portfolio;
