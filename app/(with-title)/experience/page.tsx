import { loadYaml } from '@/app/lib/loadYaml';
import Experience from '@/app/ui/Experience';
import { Metadata } from 'next';
import { fullname } from '@/app/lib/loadBase';
import skills from '@/app/lib/loadSkills';
type Props = {};

const ExperiencePage = (props: Props) => {
  const { events } = loadYaml('timeline.yml');
  return <Experience timeline={events} skills={skills} />;
};
export const metadata: Metadata = {
  title: 'Experience',
  description: `${fullname}'s Skill And Experience`,
};

export default ExperiencePage;
