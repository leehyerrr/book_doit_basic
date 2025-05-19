export default function VariousInputs() {
  return (
    <div>
      <p>VariousInputs</p>
      <div>
        {/* 오류: 초기 밸류는 defaultValue 로 넣어야함
        <input type="text" value="aaa" />
        */}
        <input type="text" placeholder="enter some texts" defaultValue="ddd" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  );
}
