import { CoffeList } from "./components/coffeList";
import { Header } from "./components/header";
import { Listsection } from "./components/listsection";
import { coffee } from "../../data/Coffee";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="menu">
          <Listsection />
        </section>
        <section className="menu">
          <CoffeList coffee={coffee} />
        </section>
      </main>
    </>
  );
};
export default Home;
