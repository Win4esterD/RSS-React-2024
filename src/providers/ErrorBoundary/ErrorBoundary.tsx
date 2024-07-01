import React, { Component, ReactNode } from 'react';
import { Button } from '../../components';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return error && { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error.message);
    console.log(info);
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return (
      <>
        {this.props.children}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={() => this.setState({ hasError: true, errorMessage: 'This is test error' })}>
            Test Error
          </Button>
        </div>
      </>
    );
  }
}

export default ErrorBoundary;
