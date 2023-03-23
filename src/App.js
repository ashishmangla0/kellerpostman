import Footer from "./components/footer/Footer";
import useMedia from "./hooks/useMedia";
import useFetch from "./hooks/useFetch";
import TopTextSlider from "./components/topTextSlider/TopTextSlider";
import Header from "./components/header/Header";
import CaseHighlights from "./components/caseHighlights/CaseHighlights";
import Awards from "./components/awards/Awards";
import Meta from "./components/meta/Meta";
import Hero from "./components/hero/Hero";
import Contact from "./components/contact/Contact";
import Shimmer from "./components/shimmer/Shimmer";

function App() {
  const { response, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}`
  );

  const mediaType = useMedia();
  return (
    <>
      <Meta data={response?.yoast_head_json} />
      {loading ? (
        <>
          <Shimmer />
        </>
      ) : (
        <>
          <Header data={response?.acf?.case_section}/>
          <TopTextSlider data={response?.acf?.top_text_slider} />
          <Hero data={response?.acf?.home_hero_section} />
          <CaseHighlights data={response?.acf?.case_section} />
          <Awards data={response?.acf?.award_section} />
          <Contact />
          <Footer
            caseLinks={response?.acf?.case_section}
            viewCases={response?.acf?.case_section?.link_text}
          />
        </>
      )}
    </>
  );
}

export default App;
