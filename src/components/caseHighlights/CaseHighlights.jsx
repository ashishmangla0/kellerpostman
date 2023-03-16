import {string} from 'prop-types';
import ActiveCaseCard from "../activeCaseCard/ActiveCaseCard";
import './casehighlights.scss';
const CaseHighlights = (props) => {
  const { data } = props;
  return (
    <section className="casehighlights">
      <div className="container">
        <h2>{data.title}</h2>
        {data.home_cases.length > 0 && (
          <div className="row">
            {data.home_cases.map((homeCase) => (
                <div className="col-12 col-sm-6 col-md-4"> <ActiveCaseCard
                title={homeCase.post_title}
              /></div>

            ))}
          </div>
        )}
      </div>
    </section>
  );
};

CaseHighlights.propTypes = {
    title: string
  };

export default CaseHighlights;
