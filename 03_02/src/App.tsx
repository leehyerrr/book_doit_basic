import Tailwindcss from './pages/Tailwindcss';
import Color from './pages/Color';
import TextsTest from './pages/TextsTest';

export default function App() {
  return (
    <div>
      <TextsTest />
      <Color />
      <Tailwindcss />
      <button className="btn btn-secondary">Secondary</button>
    </div>
  );
}
