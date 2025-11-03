import { data } from "../../dummyData/dummy";

function Home() {
  return (
    <>
      {data.results.map((row) => (
        <li>{row.title}</li>
      ))}
    </>
  );
}

export default Home;
