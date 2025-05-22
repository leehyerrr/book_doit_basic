// import {useEffect} from 'react'

// export const useInterval = (callback: () => void, duration: number = 1000) => {
//   useEffect(() => {
//     const id = setInterval(callback, duration)
//     return () => clearInterval(id)
//   }, [callback, duration])
// }

//더 나은 방법: useRef사용
//그래서 React 공식 문서나 커스텀 훅 예제에서는 callback을 매번 새로 등록하지 않고,
//useRef로 최신 콜백을 참조하는 방식을 사용합니다:
import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, duration: number = 1000) => {
  const savedCallback = useRef(callback);

  // 최신 콜백 저장
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // interval 설정
  useEffect(() => {
    const tick = () => savedCallback.current();
    const id = setInterval(tick, duration); //useRef를 사용해서 setInterval 다시 만들필요가 없음. callback이 바뀌더라도 useEffect가 재실행되지 않아도 최신 콜백이 실행됨.
    return () => clearInterval(id);
  }, [duration]);
};
