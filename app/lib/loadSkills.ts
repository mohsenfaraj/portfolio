import { loadYaml } from './loadYaml';

export type skill = {
  name: string;
  percentage: number;
  icon: string;
};

const skills: skill[] = loadYaml('skills.yml');
export default skills;
