import { Component, ChangeEvent } from 'react';
import style from './Input.module.css';

type InputPropsType = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export class Input extends Component<InputPropsType> {
  render() {
    return <input className={style.input} onChange={this.props.onChange} value={this.props.value}></input>;
  }
}
