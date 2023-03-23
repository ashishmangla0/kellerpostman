import { string } from "prop-types";

const Cases = (props) => {
  const { data, caseLinkText, caseLinkUrl, classWrap, itemClass } = props;
  console.log(data);
  console.log(caseLinkText);
  console.log(caseLinkUrl);

  const dummyText = [
    "Seeking Justice for Water Contamination Victims",
    "Representing Parents of Infants Diagnosed with Necrotizing Enterocolitis",
    "Seeking Justice for Children Diagnosed with ASD and/or ADHD",
    "Seeking Justice for Carcinogens Found in Heartburn Medication",
    "Representing Women Harmed by the Intrauterine Device",
    "Representing Veterans with Hearing Damage and Hearing Loss",
  ];

  var dataWithDummyText = data?.map(function (homeCase, index) {
    return {
      post_title: homeCase?.post_title,
      description: dummyText[index],
      id: homeCase?.ID,
      post_name: homeCase?.post_name,
    };
  });

  return (
    <>
      {data?.length > 0 && (
        <>
          <div className="dropdown__list-wrap">
            <ul className={`dropdown__list ${classWrap}`}>
              {dataWithDummyText?.map((homeCase) => (
                <li className={`${itemClass}`}>
                  <a href={homeCase?.post_name}>
                    <b>{homeCase?.post_title}</b>
                    <div className="body-12">{homeCase?.description}</div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav__action">
              <a href={caseLinkUrl}>{caseLinkText}</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Cases.propTypes = {
  caseLinkText: string,
  caseLinkUrl: string,
  classWrap: string,
  itemClass: string,
};
Cases.defaultProps = {
  caseLinkText: "",
  caseLinkUrl: "",
  classWrap: "",
  itemClass: "",
};
export default Cases;
