import * as React from 'react';
import { shallowEqual } from 'recompose';
import SlideIn from './slide-in';

export interface MenuStackedProps {
  keys: Array<string>;
  isLoading?: boolean;
  renderMenu: (
    keys: Array<string>,
    prevKeys?: Array<string>
  ) => React.ReactNode;
}

export class StackedMenu extends React.Component<MenuStackedProps> {
  isBack = false;
  oldKeys: Array<string> = [];
  componentWillReceiveProps(newProps: MenuStackedProps) {
    if (!shallowEqual(newProps.keys, this.props.keys)) {
      this.isBack = newProps.keys.length < this.props.keys.length;
      this.oldKeys = this.props.keys;
    }
  }
  render() {
    const { isLoading, renderMenu, keys, children } = this.props;

    if (!isLoading && renderMenu) {
      return (
        <SlideIn isBack={this.isBack}>
          {this.oldKeys && renderMenu(this.oldKeys)}
          {renderMenu(keys, this.oldKeys)}
        </SlideIn>
      );
    } else if (isLoading && this.oldKeys) {
      return <SlideIn isBack={this.isBack}>{renderMenu(this.oldKeys)}</SlideIn>;
    }

    return <SlideIn isBack={this.isBack}>{children}</SlideIn>;
  }
}
export default StackedMenu;
