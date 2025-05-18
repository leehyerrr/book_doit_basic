import type { FC } from 'react';

export type ArrowComponentProps = {
  href: string;
  text: string;
};

// export default function ArrowComponent({ href, text }: ArrowComponentProps) {
//   return (
//     <li>
//       <a href={href}>
//         <p>{text}</p>
//       </a>
//     </li>
//   );
// }

const ArrowComponent: FC<ArrowComponentProps> = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href}>
        <p>{text}</p>
      </a>
    </li>
  );
};
export default ArrowComponent;
