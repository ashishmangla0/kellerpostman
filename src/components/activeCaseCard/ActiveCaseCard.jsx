import { string } from "prop-types";
const ActiveCaseCard = ({ title, description, imgSrc, cardClassess }) => {
  return (
    <>
      <article className={`card ${cardClassess}`}>{title}</article>
    </>
  );
};


ActiveCaseCard.propTypes = {
  title: string,
  cardClassess: string
};
ActiveCaseCard.defaultProps = {
    title:'',
    cardClassess: ''
  };
export default ActiveCaseCard;
