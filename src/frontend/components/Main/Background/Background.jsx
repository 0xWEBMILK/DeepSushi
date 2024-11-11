import "./Backgraund.css"

const Background = (props) => {

    const {titel, description} = props
  return (
    <section className="background">
      <div className="background__text">
        <a className="background__titel" href="#">
          {titel}
        </a>
        <p className="background__description">{description}</p>
      </div>
    </section>
  );
};

export default Background;
