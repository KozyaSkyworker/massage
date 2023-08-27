import classes from './modal.module.scss';

const Modal = ({ children, isActive, setIsActive }) => {
  return (
    <div className={classes.modal} onClick={() => setIsActive(!isActive)}>
      <div className={classes.modal__inner} onClick={(e) => e.stopPropagation()}>
        {children}
        <span className={classes.modal__close} onClick={() => setIsActive(!isActive)}>
          X
        </span>
      </div>
    </div>
  );
};

export default Modal;
