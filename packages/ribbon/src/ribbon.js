import React from 'react';
import { createComponent } from 'react-fela';
import IsMaximized from './is-maximized';
import Actions from './actions';
import Tabs from './tabs';
import Title from './title';
import Spacer from './spacer';
import Item from './item';
import Group from './group';
import Foot from './foot';
import Divider from './divider';

const RibbonInner = createComponent(
  ({ theme, isMaximized }) => ({
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flex: 1,
    flexDirection: 'column',
    borderLeft: isMaximized ? undefined : `1px solid ${theme.color}`,
    borderRight: isMaximized ? undefined : `1px solid ${theme.color}`,
    borderBottom: isMaximized ? undefined : `1px solid ${theme.color}`
  }),
  p => <div {...p} />
);

const Ribbon = IsMaximized.decorate(RibbonInner);

Ribbon.Spacer = Spacer;
Ribbon.Space = Spacer;
Ribbon.Actions = Actions;
Ribbon.Tabs = Tabs;
Ribbon.Item = Item;
Ribbon.Title = Title;
Ribbon.Group = Group;
Ribbon.Foot = Foot;
Ribbon.Divider = Divider;

export default Ribbon;
