import classes from './intro.module.scss';
import photo from './../../assets/main.png';
import Aside from './../aside/aside';
const Intro = () => {
  return (
    <section className={classes.intro} id="intro">
      <Aside />
      <h1 className={classes.intro__title}>сертифицированный специалист</h1>
      <img className={classes.intro__img} src={photo} alt="photo" />
    </section>
  );
};

export default Intro;
