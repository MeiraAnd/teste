import React from 'react';
import { Tabs } from "@yazanaabed/react-tabs";
import glamorous from "glamorous";

import { Container } from './styles';
import logo from '../../assets/logo-tele-cine.png';

const Tab = ({ score }) => (
    <Container>
        <img src={logo} alt="Tele Cine"/>   

            <Tabs activeTab={{ id: "tab1" }}>

                <Tabs.Tab id="tab1" title="GENERAL">
                    <glamorous.Div padding={20}>
                        <div className="itens">
                            <div className="item flex-item-1">
                                <i className="fa fa-plus-circle"></i>
                                <h4>Mi Lista</h4>
                            </div>
                            <div className="item flex-item-1">
                                <i className="fa fa-frown-o"></i>
                                <h4>Evaluar</h4>
                            </div>
                            <div className="item flex-item-1">
                                <i className="fa fa-dot-circle-o"></i>
                                <h4>Grabar</h4>
                            </div>
                            <div className="item flex-item-1">
                                <i className="fa fa-share-square"></i>
                                <h4>Compartir</h4>
                            </div>
                            <div className="item flex-item-1">
                                <h3>SINOPSE</h3>
                                <p>{score.Synopsis}</p>
                            </div>
                        </div>
                    </glamorous.Div>
                </Tabs.Tab>

                <Tabs.Tab id="tab2" title="ELENCO">
                    <glamorous.Div padding={20}>
                        <ul>
                            {
                                score.Cast.map(cast => <li key={cast.ID}>{cast.Name}</li>)
                            }
                        </ul>
                    </glamorous.Div>
                </Tabs.Tab>

                <Tabs.Tab id="tab3" title="PRINCIPALES PREMIOS">
                    <glamorous.Div padding={20}>
                        
                    </glamorous.Div>
                </Tabs.Tab>

            </Tabs>
              
    </Container>
);

export default Tab;