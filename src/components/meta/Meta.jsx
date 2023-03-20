import { Helmet } from "react-helmet";
const Meta = (props) => {
  const { data } = props;
  const getAllvalues = (data) => {
    if (data) {
      let values = "";
      for (const value of Object.values(data)) {
        values = `${values}, ${value}`;
      }
      return values;
    }
  };

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="robots" content={`${getAllvalues(data?.robots)}`} />
        <meta property="og:locale" content={data?.og_local} />
        <meta property="og:type" content={data?.og_type} />
        <meta property="og:title" content={data?.og_title} />
        <meta property="og:url" content={data?.og_url} />
        <meta property="og:site_name" content={data?.og_site_name} />
        <meta
          property="article:modified_time"
          content={data?.article_modified_time}
        />
        <meta name="twitter:card" content={data?.twitter_card} />
      </Helmet>
    </>
  );
};
export default Meta;
