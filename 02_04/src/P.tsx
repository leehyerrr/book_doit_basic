import type { FC, PropsWithChildren } from 'react';

/* 버전17 */
// import type { ReactNode } from 'react';
// export type PProps = {
//   children?: ReactNode | undefined;
//   dd: string;
// };
// const P: FC<PProps> = (props) => {
//   return <p {...props} />;
// };

export type PProps = { dd: string };
const P: FC<PropsWithChildren<PProps>> = (props) => {
  console.log(props);
  return <p {...props} />;
};
export default P;
