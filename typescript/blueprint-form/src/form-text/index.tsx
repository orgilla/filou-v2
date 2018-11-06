import * as React from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { FieldRenderProps } from 'react-final-form';
import { FlexGrid, FelaComponent } from 'filou';
import { Field } from 'react-final-form';

interface IFormText {
  name: string;
  label: string;
  type?: string;
  size?: number;
  icon?: React.ReactType;
}
interface IText extends FieldRenderProps, IFormText {
  label: string;
}
const Inner = ({
  input: { name, onChange, onBlur, onFocus, value },
  meta,
  label,
  type,
  icon: Icon,
  ...rest
}: IText) => (
  <FormGroup
    label={label}
    helperText={meta.touched ? meta.error : undefined}
    labelInfo={meta.error && meta.touched}
    labelFor={name}
  >
    <FelaComponent
      style={{
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
        <InputGroup
          leftIcon={Icon ? <Icon color="dark3" /> : undefined}
          className={className}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          name={name}
          type={type}
          // inputProps={restInput}
        />
      )}
    />
  </FormGroup>
);

export default ({
  name = '',
  label = '',
  type = '',
  size = 3,
  icon,
  ...rest
}: IFormText) => (
  <FlexGrid.Item size={size} {...rest}>
    <Field
      component={Inner}
      name={name}
      label={label}
      type={type}
      icon={icon}
    />
  </FlexGrid.Item>
);
