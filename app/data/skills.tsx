// skillsData.ts
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaLinux,
  FaPhp,
  FaDocker,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si';

export const skills = [
  { name: 'HTML', percentage: 100, icon: FaHtml5 },
  { name: 'CSS', percentage: 95, icon: FaCss3Alt },
  { name: 'JavaScript', percentage: 90, icon: FaJs },
  { name: 'React', percentage: 80, icon: FaReact },
  { name: 'Tailwind', percentage: 80, icon: SiTailwindcss },
  { name: 'Next.js', percentage: 70, icon: SiNextdotjs },
  { name: 'Express', percentage: 65, icon: SiExpress },
  { name: 'MySql', percentage: 65, icon: SiMysql },
  { name: 'Docker', percentage: 60, icon: FaDocker },
  { name: 'Java', percentage: 60, icon: FaJava },
  { name: 'Linux', percentage: 50, icon: FaLinux },
  { name: 'PHP', percentage: 30, icon: FaPhp },
];
