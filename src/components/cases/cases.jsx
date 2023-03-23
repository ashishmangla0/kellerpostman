import { string } from "prop-types";

const Cases = (props) => {
  const { data } = props;
  console.log(data);

  const dummyText = [
    "Seeking Justice for Water Contamination Victims",
    "Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis",
    "Seeking Justice for Children Diagnosed with ASD and/or ADHD",
    "Seeking Justice for Carcinogens Found in Heartburn Medication",
    'Representing Women Harmed by the Intrauterine Device',
    'Representing Veterans with Hearing Damage and Hearing Loss'
  ];


  var dataWithDummyText = data?.map(function (homeCase, index) {
    return {
        post_title: homeCase?.post_title,
        description: dummyText[index],
        id:homeCase?.ID,
        post_name : homeCase?.post_name
    };
  });

  return (

<>zx f sdf f</>

        // {data?.home_cases?.length > 0 && (
        //   <div className="row  gx-sm-5">
        //     {dataWithDummyText?.map((homeCase) => (
        //       <div className="col-12 col-sm-6 col-md-6 col-lg-4 casehighlights__item">
        //         {/* <ActiveCaseCard title={homeCase?.post_title} description={homeCase?.description} link={homeCase?.post_name} cardClassess={'casehighlights__card'} /> */}
        //       </div>
        //     ))}
        //   </div>
        // )}
        // <a className="button button--link" href={data?.link_url}>{data?.link_text}</a>


  );
};

Cases.propTypes = {
  title: string,
};

export default Cases;
