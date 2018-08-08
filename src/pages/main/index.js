import React, { Component } from 'react';
import Head from '../../components/head';
import Tab from '../../components/tabs';
import Menu from '../../components/menu';
import axios from 'axios';

import { Container, Content } from './styles';

export default class Main extends Component {

  constructor(props){
    
    super(props);
    this.state = {
      score : [],
    }

  }

  async componentDidMount() {
    const response = await axios.get('https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json');
    
    //Retirando o valor null e montando um novo array.
    const newArray = response.data.filter(e => e !== null);
    this.setState({ episodes: newArray });

    return axios.get('https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json')
    .then(response => {
      console.log(response);
      this.setState({ score: response.data });
    });
  }

  render() {
    
    return (
      <Container>
        <Content>

          { this.state.episodes && <Menu episodes={this.state.episodes}/> }
          { this.state.score.Genres && <Head score={this.state.score}/>  }
          { this.state.score.Cast && <Tab score={this.state.score}/> }
                   
        </Content>
      </Container>
    );
  }
}