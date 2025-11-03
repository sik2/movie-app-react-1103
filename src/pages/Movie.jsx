import { data } from "../../dummyData/dummy";
import Header from "../components/Header";

function Moive() {
  return (
    <>
      <Header />
      <h1>서브 페이지</h1>
      {data.results.map((row) => (
        <li>{row.title}</li>
      ))}
    </>
  );
}

export default Moive;
