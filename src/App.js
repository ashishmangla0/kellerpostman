import Footer from "./components/footer/Footer";
import useMedia from "./hooks/useMedia";
import useFetch from "./hooks/useFetch";
import TopTextSlider from "./components/footer/topTextSlider/TopTextSlider";
import Header from "./components/header/Header";
import CaseHighlights from "./components/caseHighlights/CaseHighlights";
import Awards from "./components/awards/Awards";
import Meta from "./components/meta/Meta";
import Hero from "./components/hero/Hero";

function App() {
  const { response, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}`
  );

  return (
    <>
      <Meta data={response?.yoast_head}/>
      {loading ? (
        <div>
          <div className="shimmer shimmer--topslider"></div>
        </div>
      ) : (
        <>
          <Header />
          <TopTextSlider data={response?.acf?.top_text_slider} />
          <Hero data={response?.acf?.home_hero_section}/>
          <CaseHighlights data={response?.acf?.case_section} />
          <Awards data={response?.acf?.award_section} />
        </>
      )}
      <Footer />

      <button className="button button--primary">a sfsdf dasf sdfsd</button>
      
    </>
  );
}

export default App;
