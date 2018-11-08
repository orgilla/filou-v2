import * as React from 'react';

export interface IErrorBoundary {}
export interface IErrorBoundaryState {
  error?: any;
  errorInfo?: any;
}
export default class ErrorBoundary extends React.Component<IErrorBoundary> {
  state: IErrorBoundaryState = {};

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={styles.error}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const styles = {
  error: {
    flex: 1,
    backgroundColor: '#f98e7e',
    borderTop: '1px solid #777',
    borderBottom: '1px solid #777',
    padding: '12px'
  }
};
