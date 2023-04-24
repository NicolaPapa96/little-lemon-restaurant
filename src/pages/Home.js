import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home({ bgColor }) {
  return (
    <>
      <div onClick={bgColor("white")}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
