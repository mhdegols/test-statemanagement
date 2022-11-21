import { useSelector } from "react-redux";

export const Test2 = () => {
  const count = useSelector((state) => state.counter.test2);

  return (
    <>
      {console.log("test 2 => ", count)}
      <h1>Test 2</h1>
      <h2>{count}</h2>
    </>
  );
};
