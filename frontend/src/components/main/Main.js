import React, { Component } from "react";
import moment from 'moment'
import {Spinner, Card, CardBody, CardText,Row,Col } from 'reactstrap';
import { getFeeds } from "../API/newsFeed";
import {Header} from "../header/Header";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      showLoading: true,
      feeds:[],
      isAuthenticated:true
    };
    this.formatDate=this.formatDate.bind(this)
  }
  componentDidMount(){
    getFeeds().then((result)=>{
      this.setState({
          showLoading:false,
          feeds:result.data.data
      })
    })
  }
  formatDate(date){
    var today = new Date();
    var feedDay = new Date(date);
    let result=moment(feedDay).from(moment(today));
    return result;
  }
  renderLoaderOrData(){
    if (this.state.showLoading) {
      return(
        <Row className="widthTopSpinner">
          <Col md={{ size: 6, offset: 5 }}>
          <Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
          </Col>
        </Row>
      )
    }else{
      return (
        <div className="bottom-margin">
          {this.state.feeds.map((feed,index) =>(  
          <div key={index}>
              <Card>
                <CardBody>
                  <Row>
                    <Col md={3}>
                      <img src={feed.urlToImage} alt={index} />
                    </Col>
                    <Col> 
                      <CardText>{feed.description}</CardText>
                      <CardText>
                        <small className="text-muted">{feed.source.name} - {this.formatDate(feed.publishedAt)}</small>
                      </CardText>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <br/>
            </div>
            ))
          }
      </div>)
    }
  }
  render() {
    return(
      <div>
        <Header auth={this.state.isAuthenticated}/>
        {this.renderLoaderOrData()}
      </div>
    )
  }
}

export default Main;
