import { useClock } from './hooks';
import Clock from './pages/Clock';

export default function App() {
  const today = useClock();
  return <Clock today={today} />;
}

//틀린코드 // state를 변경시키지 않으면 재렌더링 안됨
// export default function App() {
//   let today = new Date();
//   const id = setInterval(() => {
//     today = new Date();
//   });
//   return <div>{today}</div>;
// }

//다른방법
// import { useEffect, useState } from 'react';

// export default function App() {
//   const [today, setToday] = useState(new Date());

//   useEffect(() => {
//     const id = setInterval(() => {
//       setToday(new Date());
//     }, 1000); // 1초마다 갱신
//     return () => clearInterval(id); // 컴포넌트 언마운트 시 인터벌 제거
//   }, []);

//   return <div>{today.toLocaleTimeString()}</div>;
// }
