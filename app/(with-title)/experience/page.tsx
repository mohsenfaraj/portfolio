import React, { useState } from 'react';
import { loadYaml } from '@/app/lib/loadYaml';
import Experience from '@/app/ui/Experience';
import { Metadata } from 'next';
import { fullname } from '@/app/data/base';
type Props = {};

const ExperiencePage = (props: Props) => {
  const timeline = loadYaml('timeline.yml');
  return <Experience timeline={timeline} />;
};
export const metadata: Metadata = {
  title: 'Experience',
  description: `${fullname}'s Skill And Experience`,
};

export default ExperiencePage;
