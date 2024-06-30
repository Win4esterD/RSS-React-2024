import React from 'react';
import style from './Header.module.css';
import { Input, Button } from '../../components/';

export class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.searchBlock}>
          <Input></Input>
          <Button>Search</Button>
        </div>
      </header>
    );
  }
}
