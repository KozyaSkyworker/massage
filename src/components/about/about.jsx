import classes from './about.module.scss';
import photo from './../../assets/about.png';

const About = () => {
  return (
    <section className={classes.about} id="about">
      <div className="container">
        <div className={classes.about__inner}>
          <h2>Обо мне</h2>
          <div className={classes.about__box}>
            <p>
              Меня зовут <span>Вадим Забалдуев</span>. Я работаю в медицинской клинике и являюсь
              <span> сертифицированным массажистом</span> с высшим образованием.
            </p>
            <img className={classes.about__img} src={photo} alt="сертификат" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
