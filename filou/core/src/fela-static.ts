import * as React from 'react';
import { object } from 'prop-types';

interface FelaStaticProps {
  css: string;
}

export class FelaStatic extends React.Component<FelaStaticProps> {
  static contextTypes = {
    renderer: object
  };
  static displayName = 'FelaStatic';
  constructor(props: FelaStaticProps, context: any) {
    super(props, context);
    context.renderer.renderStatic(props.css);
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

export default FelaStatic;
