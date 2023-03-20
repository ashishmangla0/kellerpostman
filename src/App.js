import { Helmet } from "react-helmet";
import Footer from "./components/footer/Footer";
import useMedia from "./hooks/useMedia";
import useFetch from "./hooks/useFetch";
import TopTextSlider from "./components/footer/topTextSlider/TopTextSlider";
import Header from "./components/header/Header";
import CaseHighlights from "./components/caseHighlights/CaseHighlights";
import Awards from "./components/awards/Awards";
import Meta from "./components/meta/Meta";

function App() {
  const { response, error, loading } = useFetch(
    `${process.env.REACT_APP_API_URL}`
  );

  return (
    <>
      <Meta data={response?.yoast_head_json}/>
      {loading ? (
        <div>
          <div className="shimmer shimmer--topslider"></div>
        </div>
      ) : (
        <>
          <Header />
          <TopTextSlider data={response?.acf?.top_text_slider} />
          <CaseHighlights data={response?.acf?.case_section} />
          <Awards data={response?.acf?.award_section} />
        </>
      )}
      <Footer />
      <div className="shimmer shimmer--topslider"></div>
    </>
  );
}

export default App;
