import * as React from 'react';
import { FormGroup } from '@blueprintjs/core';
import { Field, FieldRenderProps } from 'react-final-form';
import { FlexGrid, FelaComponent } from '@filou/core';

export interface IFormItem {
  name: string;
  label: string;
  type?: string;
  size?: number;
  icon?: React.ReactType;
  gutter?: number;
  gridSize?: number;
  component?: any;
  com?: any;
}
export interface IItem extends FieldRenderProps, IFormItem {
  label: string;
}
const Inner = ({
  input: { name, onChange, onBlur, onFocus, value },
  meta,
  label,
  type,
  icon: Icon,
  com: Component,
  ...rest
}: IItem) => (
  <FelaComponent
    style={{
      '& .bp3-form-content > div': {
        width: '100%'
      },
      '& input.bp3-input:not(:first-child)': {
        paddingLeft: !Icon ? 10 : undefined
      },
      '& svg': {
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: 'auto',
        padding: 8
      }
    }}
    render={({ className }) => (
      <FormGroup
        className={className}
        label={label}
        helperText={meta.touched ? meta.error : undefined}
        labelInfo={meta.error && meta.touched}
        labelFor={name}
      >
        <Component
          leftIcon={Icon ? <Icon color="dark3" /> : undefined}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          name={name}
          type={type}
          {...rest}
          // inputProps={restInput}
        />
      </FormGroup>
    )}
  />
);

export default ({
  name = '',
  label = '',
  type = '',
  size = 3,
  icon,
  component,
  gutter,
  gridSize,
  ...rest
}: IFormItem) => (
  <FlexGrid.Item size={size} gridSize={gridSize} gutter={gutter}>
    <Field
      component={Inner}
      com={component}
      name={name}
      label={label}
      type={type}
      icon={icon}
      {...rest}
    />
  </FlexGrid.Item>
);
