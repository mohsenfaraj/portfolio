import { loadYaml } from '@/app/lib/loadYaml';
import Projects from '@/app/ui/Projects';

type Props = {};

const Portfolio = (props: Props) => {
  const data = loadYaml('projects.yml');
  return <Projects categories={data.categories} projects={data.projects} />;
};

export default Portfolio;
