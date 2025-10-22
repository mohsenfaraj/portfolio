import { loadYaml } from './loadYaml';

export type navlink = {
  name: string;
  link: string;
};

const nav: navlink[] = loadYaml('nav.yml');

export default nav;
