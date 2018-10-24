import * as React from 'react';

interface IScrollListener {
  render: (top: number, activeId?: string | number) => React.ReactNode;
}
class ScrollListener extends React.Component<IScrollListener> {
  links: NodeListOf<Element>;
  componentDidMount() {
    document.addEventListener('scroll', this.scroll);
    this.links = document.querySelectorAll('[data-scroll-anchor]');
  }
  state = { top: 0, activeId: undefined };
  top = 0;
  scheduledAnimationFrame = false;
  scroll = () => {
    this.top = window.scrollY;
    if (this.scheduledAnimationFrame) {
      return;
    }
    this.scheduledAnimationFrame = true;
    requestAnimationFrame(this.handler);
  };
  handler = () => {
    let currLink = null;
    for (let i = 0; i < this.links.length; i++) {
      const link = this.links[i];
      const linkTop = link.getBoundingClientRect().top;
      if (linkTop <= 1) {
        currLink = link;
      } else {
        break;
      }
      /* if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('a').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      } */
    }

    this.setState({ top: this.top, activeId: currLink && currLink.id });
    this.scheduledAnimationFrame = false;
  };
  componentWillUnmount() {
    document.removeEventListener('scroll', this.scroll);
  }
  render() {
    const { render } = this.props;
    const { top, activeId } = this.state;
    return render(top, activeId);
  }
}

export default ScrollListener;
