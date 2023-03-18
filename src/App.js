import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import useMedia from './hooks/useMedia';
import useFetch from './hooks/useFetch';
import TopTextSlider from './components/footer/topTextSlider/TopTextSlider';
import Header from './components/header/Header';
import CaseHighlights from './components/caseHighlights/CaseHighlights';

function App() {
  const {response , loading} = useFetch(`${process.env.REACT_APP_API_URL}`);

  return (
    <>

    {loading ? <div>
    <div className='shimmer shimmer--topslider'></div>
    </div> : <>
    <Header/>
    <TopTextSlider data={response?.acf?.top_text_slider}/>
    <CaseHighlights data={response?.acf?.case_section}/>
    </>}

      <div>

      </div>
      <Footer />
      <div className='shimmer shimmer--topslider'></div>
    </>


  );
}

export default App;
