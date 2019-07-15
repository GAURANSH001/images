import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, List,Carousel} from 'antd';
import 'antd/dist/antd.css'


 
 
 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.pnr=[];
    this.state.det=[];
    this.state.item="";
  }
  

getPNR(){
  let p=this.state.pnr;
  let d=this.state.det;
  
  axios.get("https://api.railwayapi.com/v2/pnr-status/pnr/"+p+"/apikey/6iiwocsv52/")
  .then((res)=>{
    console.log(res.data);
    d.push(res.data);
    console.log(d);
    this.setState({
      det:d,
      item:res.data.to_station.name,
      item1:res.data.from_station.name,
      item2:res.data.train.name,
      item3:res.data.passenger,
    })    
  })
}
/*disPNR(){
  let m=[];
   m=this.state.det.maps((item)=>{
    return <div>{this.state.item}</div>
  })
  return m;
}*/
getvalue(e){
  console.log(e.target.value);
  this.setState({
 pnr: e.target.value   
  })
}

  render(){
    return <div>
       <Carousel autoplay>
    <div>
      <img width="1012px" height="300px" src="https://images.pexels.com/photos/433301/pexels-photo-433301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="sorry"></img>
    </div>
    <div>
      
      <img width="1012px" height="300px" src="https://images7.alphacoders.com/661/thumb-1920-661783.jpg"></img>
    </div>
    
  </Carousel>   
           
      <div className="align">
      <div>
      <input type="text" placeholder="enter your pnr no." onChange={(e)=>{this.getvalue(e)}}></input>
      <Button type="primary"  icon="search" onClick={()=>{this.getPNR()}}>CHECK PNR</Button>
      </div>
      <div>
      <List >
        <List.Item className="align"><h2>TO-STATION-  {this.state.item}</h2></List.Item>
        <List.Item  className="align"><h2>FROM-STATION-{this.state.item1}</h2></List.Item>
        <List.Item  className="align"><h2>TRAIN-NAME-{this.state.item2}</h2></List.Item>
        <List.Item>{this.state.item3}</List.Item> 
      </List>
      </div>
      </div>
    </div>
  }
}


export default App;