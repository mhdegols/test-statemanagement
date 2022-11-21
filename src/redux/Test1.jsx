import { useSelector } from "react-redux";

export const Test1 = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      {console.log("test 1 => ", count)}
      <h1>Test 1</h1>
      <h2>{count}</h2>
    </>
  );
};
