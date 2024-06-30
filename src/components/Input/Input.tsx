import {Component} from "react";
import style from './Input.module.css'

export class Input extends Component {
  render() {
    return <input className={style.input}></input>;
  }
}