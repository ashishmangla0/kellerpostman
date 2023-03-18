import { string } from "prop-types";
import ActiveCaseCard from "../activeCaseCard/ActiveCaseCard";
import "./casehighlights.scss";
const CaseHighlights = (props) => {
  const { data } = props;

  const dummyText = [
    "Seeking Justice for Water Contamination Victims",
    "Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis",
    "Seeking Justice for Children Diagnosed with ASD and/or ADHD",
    "Seeking Justice for Carcinogens Found in Heartburn Medication",
    'Representing Women Harmed by the Intrauterine Device',
    'Representing Veterans with Hearing Damage and Hearing Loss'
  ];
  const sortObj = (obj, property) => {
    let sortedObj = obj.sort(
      (p1, p2) => (p1[property] - p2[property]))
    return sortedObj;
  }

  var dataWithDummyText = sortObj(data?.home_cases,'ID').map(function (homeCase, index) {
    return {
        post_title: homeCase.post_title,
        description: dummyText[index],
        id:homeCase.ID,
        post_name : homeCase.post_name
    };
  });

  return (
    <section className="casehighlights">
      <div className="container">
        <h2 tabIndex={'0'}>{data.title}</h2>
        {data.home_cases.length > 0 && (
          <div className="row  gx-5">
            {dataWithDummyText?.map((homeCase) => (
              <div className="col-12 col-sm-6 col-md-4">
                <ActiveCaseCard title={homeCase.post_title} description={homeCase.description} link={homeCase.post_name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

CaseHighlights.propTypes = {
  title: string,
};

export default CaseHighlights;
