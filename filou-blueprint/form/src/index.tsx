import * as React from 'react';
import { FlexGrid } from '@filou/core';
import { Form } from 'react-final-form';
import { FormApi } from 'final-form';
import { Button, Text } from '@filou/blueprint';
import { Callout } from '@blueprintjs/core';
import FormText from './text';
import FormSpace from './space';
import FormItem from './item';

export interface IForm<T = object> {
  title?: string;
  additionalButton?: React.ReactNode;
  description: string;
  initialValues?: any;
  onSubmit?: (
    values: T,
    form: FormApi,
    callback?: ((errors?: object | undefined) => void) | undefined
  ) => void | object | Promise<object | undefined> | undefined;
  validate?: any;
  children?: React.ReactNode;
  error?: any;
  submitLabel?: string;
  submitDisabled?: boolean;
  size?: number;
}

interface IFormInner extends IForm {
  onSubmit: (
    values: any,
    form: FormApi,
    callback?: ((errors?: object | undefined) => void) | undefined
  ) => void | object | Promise<object | undefined> | undefined;
}

const empty = {};
class BlueprintForm<T> extends React.Component<IForm<T>> {
  static Text = FormText;
  static Space = FormSpace;
  static Item = FormItem;
  render() {
    const {
      title,
      initialValues = empty,
      description,
      additionalButton,
      onSubmit,
      validate,
      children,
      error,
      submitLabel,
      submitDisabled,
      size = 3
    } = this.props as IFormInner;

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, valid }) => (
          <form onSubmit={handleSubmit}>
            {title && <Text type="h1">{title}</Text>}
            {/* <Spinner intent={Intent.PRIMARY} /> */}
            <p>{description}</p>
            <br />
            <br />
            <FlexGrid size={size} gutter={2}>
              {children as any}
              {error && (
                <FlexGrid.Item size={3}>
                  <Callout title="Fehlerbeschreibung" intent="danger">
                    {' '}
                    {error.error || error.message || error.type}
                  </Callout>
                </FlexGrid.Item>
              )}
              <FlexGrid.Item size={3}>
                <br />
                {onSubmit && (
                  <Button
                    // intent="success"
                    minimal
                    disabled={
                      submitting || pristine || !valid || submitDisabled
                    }
                    type="submit"
                  >
                    {submitLabel}
                  </Button>
                )}
                {onSubmit && ' '}
                {additionalButton}
              </FlexGrid.Item>
            </FlexGrid>
          </form>
        )}
      />
    );
  }
}

export default BlueprintForm;
