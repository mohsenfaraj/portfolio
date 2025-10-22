import { loadYaml } from './loadYaml';

export type link = {
  name: string;
  link: string;
  icon: string;
};

const socials: link[] = loadYaml('socials.yml');
export default socials;
