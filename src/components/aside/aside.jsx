import { useState } from 'react';
import classes from './aside.module.scss';

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen && window.innerWidth < 641) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <aside className={`${classes.aside} ${isOpen ? classes.aside_open : ''}`}>
      <aside className={classes.aside__inner}>
        <div
          className={`${classes.aside__burger} ${isOpen ? classes.aside__burger_open : ''}`}
          onClick={() => setIsOpen(!isOpen)}>
          <span className={classes.aside__line}></span>
        </div>
        <nav className="aside__nav">
          <ul className={classes.aside__list}>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#intro">
                <i class="fa-solid fa-user"></i> Начало
              </a>
            </li>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#about">
                <i class="fa-solid fa-user-nurse"></i> Обо мне
              </a>
            </li>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#services">
                <i class="fa-solid fa-suitcase-medical"></i> Услуги
              </a>
            </li>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#how">
                <i class="fa-solid fa-hands-praying"></i> Как я работаю
              </a>
            </li>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#collage">
                <i class="fa-solid fa-image"></i> Фотографии
              </a>
            </li>
            <li className={classes.aside__item}>
              <a className={classes.aside__link} href="#contacts">
                <i class="fa-solid fa-map-location"></i> Контакты
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </aside>
  );
};

export default Aside;
