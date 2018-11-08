import * as React from 'react';

interface IStateMachine {
  initialValue?: any;
  children: (onChange: (value: any) => void, value?: any) => React.ReactNode;
}

class StateProvider extends React.Component<IStateMachine> {
  state = { value: this.props.initialValue || undefined };
  setter = (value?: any) => {
    this.setState({ value });
  };
  render() {
    return this.props.children(this.setter, this.state.value);
  }
}

export default StateProvider;
