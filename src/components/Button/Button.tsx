import {Component, ReactNode} from "react";
import style from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
}

export class Button extends Component {
  render() {
    return <button className={style.button}>{(this.props as ButtonProps).children}</button>;
  }
}