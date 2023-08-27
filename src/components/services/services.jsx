import classes from './services.module.scss';
import photo from './../../assets/services.png';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__inner">
          <h2>С чем я могу Вам помочь</h2>
          <div className={classes.services__box}>
            <div className={classes.services__tabs}>
              <div className={classes.services__row}>
                <div className={classes.services__tab}>Мышечные спазмы, боли</div>
                <div className={classes.services__tab}>Судороги</div>
                <div className={classes.services__tab}>Гипертония</div>
              </div>

              <div className={classes.services__row}>
                <div className={classes.services__tab}>Грыжи, протрузии</div>
                <div className={classes.services__tab}>Миофасциальный синдром</div>
              </div>

              <div className={classes.services__row}>
                <div className={classes.services__tab}>Сколиоз, кифоз, поясничный лордоз</div>
              </div>
            </div>
            <img className={classes.services__img} src={photo}></img>
            <svg
              className={classes.services__blobs}
              id="visual"
              viewBox="0 0 960 540"
              width="960"
              height="540"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1">
              <g>
                <g transform="translate(609 172)">
                  <path
                    d="M88.5 -66.8C113.7 -38.9 132.6 -2.2 128.6 34.9C124.5 71.9 97.5 109.2 63.1 122.5C28.7 135.7 -13.2 125 -45 105.2C-76.9 85.3 -98.8 56.4 -105.1 25.1C-111.4 -6.3 -102 -40.1 -81.9 -66.9C-61.8 -93.7 -30.9 -113.4 0.4 -113.7C31.6 -113.9 63.2 -94.8 88.5 -66.8Z"
                    stroke="#fff"
                    fill="none"
                    strokeWidth="20"></path>
                </g>
                <g transform="translate(250 200)">
                  <path
                    d="M101.9 -81.9C125.4 -51.8 133.3 -9.8 122.9 24.9C112.4 59.6 83.8 87 52.5 97.6C21.3 108.2 -12.4 102.1 -45.8 88.5C-79.2 75 -112.3 54.1 -120.1 25.7C-128 -2.7 -110.6 -38.5 -86.4 -68.8C-62.2 -99.1 -31.1 -123.8 4.1 -127C39.2 -130.3 78.4 -112 101.9 -81.9Z"
                    stroke="#fff"
                    fill="none"
                    strokeWidth="20"></path>
                </g>
                <g transform="translate(470 320)">
                  <path
                    d="M102.8 -87.4C120.3 -59.9 112.9 -17.9 102.6 21.9C92.3 61.7 79.2 99.4 52.4 114.5C25.6 129.7 -14.9 122.3 -47.7 104.4C-80.5 86.6 -105.7 58.2 -113.7 25.3C-121.7 -7.6 -112.5 -45 -90.7 -73.5C-68.9 -101.9 -34.4 -121.5 4.1 -124.7C42.6 -128 85.2 -114.9 102.8 -87.4Z"
                    stroke="#fff"
                    fill="none"
                    strokeWidth="20"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
