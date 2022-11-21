import { atom, useAtom } from "jotai";

// Create your atoms and derivatives
const textAtom = atom("hello");
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

// Use them anywhere in your app
const Input = () => {
  console.log("input");
  const [text, setText] = useAtom(textAtom);

  const handleChange = (e) => setText(e.target.value);
  return <input value={text} onChange={handleChange} />;
};

const Uppercase = () => {
  console.log("output");
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
};

// Now you have the components
export const JotaiIndex = () => {
  return (
    <>
      <Input />
      <Uppercase />
    </>
  );
};
