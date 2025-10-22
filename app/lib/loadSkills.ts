import { loadYaml } from './loadYaml';

export type skill = {
  name: string;
  percentage: number;
  icon: string;
};

const { skills }: { skills: skill[] } = loadYaml('skills.yml');
export default skills;
