import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button, List,Carousel} from 'antd';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

const { SubMenu } = Menu;

 
 
 
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
    return <div className="container-fluid">
      <div className="color">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="logo">
          
         <a href="https://www.cleartrip.com/trains/list" target="_blank">HOME</a>
        </Menu.Item>
    
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="" />
               ABOUT
            </span>
          }
        >
          <Menu.ItemGroup title="">
            <Menu.Item key="setting:1"> <a href="https://www.orientrailjourneys.com/blog/history-of-indian-railways/">HISTORY</a></Menu.Item>
            
          </Menu.ItemGroup>
          <Menu.ItemGroup title="">
            <Menu.Item key="setting:3"><a href="https://swarajyamag.com/infrastructure/nine-rail-projects-in-india-to-look-out-for" target="_blank">UPCOMING PROJECTS</a></Menu.Item>
          </Menu.ItemGroup>
          
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="" />
               CONTACTS
            </span>
          }
        >
          <Menu.ItemGroup title="">
            <Menu.Item key="setting:1">8949484623 </Menu.Item>
            
          </Menu.ItemGroup>
          <Menu.ItemGroup title="">
            <Menu.Item key="setting:3">9461285485</Menu.Item>
          </Menu.ItemGroup>
          
        </SubMenu>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="" />
              <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
               
            </span>
          }
        >
          
         
          
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            
          </a>
        </Menu.Item>
      </Menu>
      </div>
       <Carousel autoplay>
    <div>
      <img width="1012px" height="400px" src="https://github.com/GAURANSH001/images/blob/master/IMG6.jpg?raw=true" className="de" alt="sorry"></img>
    </div>
    <div>
      
      <img width="1012px" height="400px" src="https://github.com/GAURANSH001/images/blob/master/img3.jpg?raw=true"></img>
    </div>
    <div>
    <img width="1012px" height="400px" src="https://ak1.picdn.net/shutterstock/videos/26887621/thumb/1.jpg"></img>
    </div>
    <div>
    <img width="1012px" height="400px" src="https://ak4.picdn.net/shutterstock/videos/15040414/thumb/11.jpg"></img>
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