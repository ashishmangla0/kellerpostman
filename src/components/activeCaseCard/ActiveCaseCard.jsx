import { string } from "prop-types";
import './activecasecard.scss';
const ActiveCaseCard = ({ title, description, imgSrc, cardClassess,link }) => {
    return (
        <>
            <article className={`card ${cardClassess}`}>
                <a className="card__link" href={link}>
                <div className="card__image">
                <img src={`./${link}.jpg`} alt={title} />
                </div>
                <i className="icon icon-facebook"></i>

                    <div className="card__content">
                        <h3 className="card__title" tabIndex={0}>
                            {title}
                        </h3>
                        <div tabIndex={0} className="card__desc">
                            {description}
                        </div>
                    </div>
                </a>
            </article>
        </>
    );
};


ActiveCaseCard.propTypes = {
    title: string,
    cardClassess: string,
    description: string,
    link: string
};
ActiveCaseCard.defaultProps = {
    title: '',
    cardClassess: '',
    description: '',
    link:''
};
export default ActiveCaseCard;
