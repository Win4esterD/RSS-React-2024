import { Component, ReactNode, SyntheticEvent } from 'react';
import style from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: (e: SyntheticEvent) => void;
};

export class Button extends Component<ButtonProps> {
  render() {
    return (
      <button className={style.button} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
