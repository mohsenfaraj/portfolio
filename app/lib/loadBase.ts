import { loadYaml } from './loadYaml';

type base = {
  fullname: string;
  description: string;
  titles: string[];
  BASEURL: string;
  contactAPI: string;
  repo: string;
  email: string;
  telegram: string;
  CVLink: string;
};

const baseConfig: base = loadYaml('base.yml');

export const {
  fullname,
  description,
  titles,
  BASEURL,
  contactAPI,
  repo,
  email,
  telegram,
  CVLink,
} = baseConfig;

export default baseConfig;
