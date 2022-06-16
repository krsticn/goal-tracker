import React, { Fragment } from "react";
import ReactDom from "react-dom";
import Button from "../UI/Button";
import style from "./GoalModal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onCloseModal}>Okay</Button>
      </footer>
    </div>
  );
};

const GoalModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onCloseModal={props.onCloseModal}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default GoalModal;
