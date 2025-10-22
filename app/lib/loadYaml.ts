import YAML from 'yaml';
import fs from 'fs';
import path from 'path';

export const loadYaml = (fileName: string) => {
  const filePath = path.join(process.cwd(), '/data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  try {
    const parsed = YAML.parse(fileContent);
    return parsed;
  } catch (e) {
    console.error(e);
    return null; // Return null or handle the error as you prefer
  }
};
