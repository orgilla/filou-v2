import * as React from 'react';
import Form from '../form';

interface IContactForm {
  post: string;
}
class ContactForm extends React.Component<IContactForm> {
  state = { done: false };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const obj = {};
    [...data['keys']()].filter(x => x).forEach(key => {
      obj[key] = data.get(key);
    });
    fetch(this.props.post, {
      method: 'POST',
      body: JSON.stringify({ data: obj })
    }).then(() => {
      this.setState({ done: true });
    });
  };

  render() {
    const { children } = this.props;
    const { done } = this.state;
    if (done) {
      return <span>Anfrage wurde abgeschickt.</span>;
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <p>{children}</p>
        <fieldset>
          <label htmlFor="email">E-Mail</label>
          <input type="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Text</label>
          <textarea name="message" rows={4} />
        </fieldset>
        <button type="submit">Absenden</button>
      </Form>
    );
  }
}

export default ContactForm;
