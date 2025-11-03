import { data } from "../../dummyData/dummy";

function Moive() {
  return (
    <>
      <h1>서브 페이지</h1>
      {data.results.map((row) => (
        <li>{row.title}</li>
      ))}
    </>
  );
}

export default Moive;
