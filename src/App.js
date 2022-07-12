import React, { Component } from "react";
import { GET_CHARACTER } from "../src/apollo/queries"
import Layout from "./components/layout/components";
import CharacterGenerator from "./views/character-generator";
import History from "./views/history";
import { withApollo } from "@apollo/react-hoc";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      history: [],
      loadingCharacter: false
    };
  }

  requestCharacter = async () => {
    this.setState({ loadingCharacter: true });
    const { client } = this.props;
    const { history } = this.state;
    const randomId = Math.ceil(Math.random() * 826);
    const {
      data: { character }
    } = await client.query({
      query: GET_CHARACTER,
      variables: { id: randomId }
    });
    this.setState({
      character,
      history: [character, ...history]
    });
    this.setState({ loadingCharacter: false });
  };

  selectCharacter = id => {
    const { history } = this.state;

    this.setState({
      character: history[id]
    });

    window.scrollTo(0, 0);
  };

  render() {
    const { loadingCharacter, character, history } = this.state;
    return (
      <Layout>
        <CharacterGenerator
          loading={loadingCharacter}
          character={character}
          requestCharacter={this.requestCharacter}
        />
        {history.length > 0 && (
          <History selectCharacter={this.selectCharacter} history={history} />
        )}
      </Layout>
    );
  }
}

export default withApollo(App);
