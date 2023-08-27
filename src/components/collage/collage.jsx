import photo from './../../assets/collage.png';

const Collage = () => {
  return (
    <section className="collage" style={{ height: 'unset' }} id="collage">
      <div className="container">
        <div
          className="collage__inner"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={photo}
            alt="коллаж"
            title="фотографии моей работы"
            style={{ marginTop: '2em', marginBottom: '2em' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Collage;
