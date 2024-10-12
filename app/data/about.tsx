import {
  FaChalkboardTeacher,
  FaHandshake,
  FaLaptopCode,
  FaLightbulb,
  FaTree,
} from 'react-icons/fa';

const iconClass =
  'absolute left-2 top-1/2 z-0 -translate-y-1/2 text-9xl dark:text-[#353535] text-zinc-200';

const cards = [
  {
    title: 'Creativity & Problem Solving',
    body: 'I love creativity and excel at finding and solving problems. An example of this is my work on the Hamyar Vahed project, where I provided practical and effective solutions to improve the user experience.',
    icon: FaLightbulb,
  },
  {
    title: 'Tech Enthusiasm',
    body: `As a web development enthusiast, I strive for perfection and always aim for the best results. I primarily work with web technologies but have also explored other languages like Java.`,
    icon: FaLaptopCode,
  },
  {
    title: 'Hungry Learner & Teacher',
    body: `I'm passionate about learning and expanding my skill set. I look forward to diving deeper into IoT and electronics in the near future. Additionally, I enjoy teaching others what I’ve learned and am excited about future content creation opportunities.`,
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Love for Nature',
    body: `Nature is my source of inspiration. It reminds me to be adaptable and appreciate the beauty in simplicity.`,
    icon: FaTree,
  },
  {
    title: 'Collaboration & Communication',
    body: `I value teamwork and believe that good communication is key to achieving great results. I thrive in collaborative environments and always aim to contribute positively to the team dynamic.`,
    icon: FaHandshake,
  },
  {
    title: 'Applying Knowledge Creatively',
    body: `I love finding unexpected ways to apply my knowledge to projects, solving challenges with innovative approaches.`,
    icon: FaLaptopCode,
  },
];

export { iconClass, cards };
