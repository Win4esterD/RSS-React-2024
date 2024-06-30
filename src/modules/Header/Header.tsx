import React, { ChangeEvent } from 'react';
import style from './Header.module.css';
import { Input, Button } from '../../components/';

type HeaderProps = {
  searchHandler: (query: string) => void;
};

type HeaderState = {
  input: string;
};

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      input: localStorage.getItem('searchQuery')
        ? (localStorage.getItem('searchQuery') as string)
        : '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <header className={style.header}>
        <div className={style.searchBlock}>
          <Input onChange={this.handleChange} value={this.state.input}></Input>
          <Button onClick={() => this.props.searchHandler(this.state.input)}>Search</Button>
        </div>
      </header>
    );
  }
}
