import { loadYaml } from './loadYaml';

export type card = {
  title: string;
  body: string;
  icon: string;
};

const { cards }: { cards: card[] } = loadYaml('about.yml');
export default cards;
