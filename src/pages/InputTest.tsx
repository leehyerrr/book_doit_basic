import type { ChangeEvent } from 'react';
import { useState, useCallback } from 'react';
import { Title } from '../components';
import { Input } from '../theme/daisyui';

export default function InputTest() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue((notUsed) => e.target.value);
  }, []);

  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // setChecked((notUsed) => e.target.checked);
    setChecked(e.target.checked); //굳이 함수형 쓸 필요가 없음..
  }, []);

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input
          type="text"
          value={value}
          onChange={onChangeValue}
          className="input-primary input-sm"
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeChecked}
          className="ml-4 checkbox checkbox-primary input-sm"
        />
      </div>
    </section>
  );
}
