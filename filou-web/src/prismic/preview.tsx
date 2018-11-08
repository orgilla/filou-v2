import * as React from 'react';
import * as Prismic from 'prismic-javascript';
import * as qs from 'qs';

interface IItem {
  api: any;
  location: any;
  render: (data: any, id?: string) => React.ReactNode;
  fetchData: Function;
}
class Item extends React.Component<IItem> {
  state = { data: undefined, id: undefined };
  componentDidMount() {
    this.fetch(this.props);
  }

  fetch = async ({ api, location, fetchData }: IItem) => {
    const id = location.hash.substr(1);
    const data = await fetchData(api);
    this.setState({ id, data });
  };

  render() {
    const { id, data } = this.state;
    const { render } = this.props;
    return render(data, id);
  }
}

interface IRedirect {
  api: any;
  location: any;
  history: any;
}
class Redirect extends React.Component<IRedirect> {
  state = { doc: null };
  componentDidMount() {
    const { api, history, location } = this.props;
    const { token, documentId } = qs.parse(location.search.slice(1));
    if (token) {
      api.previewSession(token, () => '/', '/').then(() => {
        history.push(`/preview#${documentId}`);
      });
      // props.history.push(`${url}?preview=true`);
    }
  }

  render() {
    return null;
  }
}

interface IPreview {
  name: string;
  render: (data: any, id?: string) => React.ReactNode;
  head: (chilren: React.ReactNode) => React.ReactNode;
  fetchData: Function;
  location: any;
  history: any;
}
class Preview extends React.Component<IPreview> {
  state = { api: undefined };
  componentDidMount() {
    const { name } = this.props;

    window['prismic'] = {
      endpoint: `https://${name}.prismic.io/api/v2`
    };

    Prismic.getApi(`https://${name}.prismic.io/api/v2`).then((api: any) =>
      this.setState({ api })
    );
  }

  render() {
    const { api } = this.state;
    const { render, fetchData, head, history, location } = this.props;
    return (
      <>
        {head(
          <script
            type="text/javascript"
            src="//static.cdn.prismic.io/prismic.min.js"
          />
        )}
        {api && <Redirect location={location} history={history} api={api} />}
        {api && (
          <Item
            location={location}
            api={api}
            fetchData={fetchData}
            render={render}
          />
        )}
      </>
    );
  }
}

export default Preview;
