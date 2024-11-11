import "./Background.css"

const Background = (props) => {

  const {title, description} = props
  return (
    <section className="background">
      <div className="background__text">
        <a className="background__title" href="#">
          {title}
        </a>
        <p className="background__description">{description}</p>
      </div>
    </section>
  );
};

export default Background;
