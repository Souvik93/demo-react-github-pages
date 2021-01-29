import { Card } from "react-bootstrap";
import React from 'react';

import youtube from './api';

export class ContentsComponent extends React.Component {



    constructor() {
        super();
        this.handleSubmit();
        this.state = {
          videos: [],
          // currentState: "not-panic",
    
          // Note: think carefully before initializing
          // state based on props!
          // someInitialValue: this.props.initialValue
        }
      }

    handleSubmit = async () => {
        const response = await youtube.get('/search', {
            params: {
                q: 'merge'
            }
        })
        console.log('Hey There !! From Axios Response');
          console.log(response.data.items);
        this.setState({
          
            videos: response.data.items
        })
    };

    render() {
        return(
            <div>
                <h6> Please check out our following vidoes with code snippest.</h6>
                            {this.state.videos.map(el => <div value={el} key={el.etag}>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{el.snippet.title}</Card.Title>
                                        <Card.Img src={el.snippet.thumbnails.default.url}></Card.Img >
                                        <Card.Text>
                                        {el.snippet.description}
                                    </Card.Text>
                                        <Card.Link>Publish Time : - {el.snippet.publishTime}</Card.Link>
                                    </Card.Body>
                                </Card>
                                <br></br>  
                            </div>)} 
            </div>
        )
    }
}