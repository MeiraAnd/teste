import React, { Fragment } from 'react';

import { Sidebar } from './styles';

const Menu = ({ episodes  }) => (
    <Sidebar>
        <Fragment>
            <input id="navbar" type='checkbox'/>
            <label htmlFor="navbar">
                <div className='menu'>
                    <span className='hamburger'></span>
                </div>
            </label>
            <ul>
                <div className="tabs-container">
                
                    <input type="radio" name="tabs" className="tabs" id="tab1" defaultChecked/>
                    <label htmlFor="tab1">T1</label>

                    <div className="half">

                        <div className="tab blue">                            
                            {
                                episodes.map(episode => (    
                                                             
                                    <div key={episode.ID}>
                                        <input id={episode.ID} type="radio" name="tabs2"/>   
                                        <label htmlFor={episode.ID}>{episode.EpisodeNumber} {episode.Title}</label>
                                        
                                        <div className="tab-content">                          
                                            <img src={episode.Image} /> 
                                            <p>{episode.Synopsis}</p>
                                        </div>

                                    </div>
                                ))
                            }  
                        </div>

                    </div>

                    <input type="radio" name="tabs" className="tabs" id="tab2"/>
                    <label htmlFor="tab2">T2</label>
                    <div></div>

                    <input type="radio" name="tabs" className="tabs" id="tab3"/>
                    <label htmlFor="tab3">T3</label>
                    <div></div>

                </div>
            </ul>

        </Fragment>    
    </Sidebar>
);

export default Menu;