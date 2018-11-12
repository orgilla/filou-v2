import * as React from 'react';
import { FlexGrid, Text, ElementType, createElement } from '@filou/core';
import { Form } from 'react-final-form';
import { FormApi } from 'final-form';
import { Button } from '@filou/blueprint';
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
  errorIcon?: ElementType;
}

const getErrorText = (obj: any): any => {
  if (!obj) {
    return obj;
  }
  if (obj.message) {
    return obj.message;
  }
  if (obj.type) {
    return obj.type;
  }
  if (obj.code) {
    return obj.code;
  }
  if (typeof obj.error === 'string') {
    return obj.error;
  }
  if (obj.error) {
    return getErrorText(obj.error);
  }
  return null;
};

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
      size = 3,
      errorIcon
    } = this.props as IFormInner;

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, valid }) => (
          <form onSubmit={handleSubmit}>
            {title && <Text type="h2">{title}</Text>}
            {/* <Spinner intent={Intent.PRIMARY} /> */}
            <p>{description}</p>
            <br />
            <br />
            <FlexGrid size={size} gutter={2}>
              {children as any}
              {error && (
                <FlexGrid.Item size={3}>
                  <Callout
                    title="Fehlerbeschreibung"
                    intent="danger"
                    icon={createElement(errorIcon) as React.ReactElement<{}>}
                  >
                    {getErrorText(error) + ''}
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
