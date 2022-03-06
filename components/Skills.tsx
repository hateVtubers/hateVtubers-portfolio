import { skills } from 'data/user';

export const Skills = () => {
  return (
    <ul className='flex flex-wrap items-center gap-2.5'>
      {skills.map(({ Logo, color }, i) => (
        <li key={i}>
          <Logo color={color} />
        </li>
      ))}
    </ul>
  );
};
