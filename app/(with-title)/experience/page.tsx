import React, { useState } from 'react';
import { loadYaml } from '@/app/lib/loadYaml';
import Experience from '@/app/ui/Experience';
type Props = {};

const ExperiencePage = (props: Props) => {
  const timeline = loadYaml('timeline.yml');
  return <Experience timeline={timeline} />;
};

export default ExperiencePage;
