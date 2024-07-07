import React, { Component, ReactNode } from 'react';

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
        <div style={{backgroundColor: 'red', height: '100lvh'}}>
          <p style={{ textAlign: 'center', paddingTop: '1rem', fontWeight: 700 }}>{this.state.errorMessage}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
