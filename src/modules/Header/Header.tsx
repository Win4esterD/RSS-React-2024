import React, { ChangeEvent } from 'react';
import style from './Header.module.css';
import { Input, Button } from '../../components/';

type HeaderProps = object;

type HeaderStateProps = {
  input: string;
};

export class Header extends React.Component<HeaderProps, HeaderStateProps> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      input: localStorage.getItem('searchQuery')
        ? (localStorage.getItem('searchQuery') as string)
        : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveSearchQuery = this.saveSearchQuery.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ input: e.target.value });
  }

  saveSearchQuery() {
    localStorage.setItem('searchQuery', this.state.input);
  }

  render() {
    return (
      <header className={style.header}>
        <div className={style.searchBlock}>
          <Input onChange={this.handleChange} value={this.state.input}></Input>
          <Button onClick={this.saveSearchQuery}>Search</Button>
        </div>
      </header>
    );
  }
}
