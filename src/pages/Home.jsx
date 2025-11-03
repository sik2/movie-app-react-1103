import { data } from "../../dummyData/dummy";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <h1>메인 페이지</h1>
      {data.results.map((row) => (
        <li>{row.title}</li>
      ))}
    </>
  );
}

export default Home;
