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

// if(data){
//     for (const [key, value] of Object.entries(data)) {
//         console.log(`<meta property="${key}" content="${value}" />`);
//       }
// }

const getAllProps = (data) =>{
    let allProps = []
    if(data){
        for (const [key, value] of Object.entries(data)) {
            allProps.push(`<meta property="${key}" content="${value}" />`.replace("/n",""))
          }
    }
    return allProps
}
// getAllProps(data);
console.log(getAllProps(data));

  return (
    <>
      <Helmet>
        <title>{data?.title}</title>
        <meta name="robots" content={`${getAllvalues(data?.robots)}`} />
        <meta property="og:locale" content={data?.og_local} />

      </Helmet>
    </>
  );
};
export default Meta;
