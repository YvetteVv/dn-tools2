import React, { Component } from 'react';


import {withRouter} from 'react-router-dom'
import {Numbers} from "../components/Numbers"

import {List, Card, Layout,Tag, Divider} from "antd";
import {Header} from "../header";
import "../App.css"
import {personList} from "../data.mock"

const { Footer } = Layout;
class PersonReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      arr:[],
      count:0,
      perGroup:0
    }
  }

  generateOccu = (size, perGroup) => {
    let newArr = [];
    let count = 0;
    let tmp = [];
    while(count < size){
      let random = parseInt(Math.random() * (size));
      if(tmp.indexOf(random) === -1){
        tmp.push(random);
        newArr.push(random);
        count ++;
      }
    }
    console.log(newArr)
    let group = []
    let i = 0
    while(i < size){
      let ele = []
      for(let j = 0; j < perGroup; j++){
        if(i+j < size){
          ele.push(newArr[i+j] + 1)
        }
        else break
      }
      group.push(ele.sort())
      i = i + parseInt(perGroup)
    }

    console.log(group)
    this.setState({
      arr:group
    })
  };

  render() {
    //console.log(this.state.checkedList)

    return (
        <div className="cell-wall">

          <div className="cell-membrane">
            <div>
              <ul>
                <li><a onClick={() => {this.props.history.push('/occupation');}}>职业转转乐</a></li>
                <li><a className="active" onClick={() => {this.props.history.push('/group');}}>随机分组器</a></li>
                <Footer style={{textAlign: 'center',backgroundColor:'#e3f2fd'}}>DragonNest ©2020 Created by 花卷卷</Footer>
              </ul>
            </div>
            <Divider orientation="left">分组随机抽签器</Divider>

            <div>
              <Tag color="magenta">DN</Tag>
              {/*<Tag color="lime">Destiny公会</Tag>*/}
              {/*<Tag color="volcano">活动</Tag>*/}
              {/*<Tag color="orange">orange</Tag>*/}
              <Tag color="gold">分组转转乐</Tag>
              {/*<Tag color="lime">lime</Tag>*/}
              {/*<Tag color="green">green</Tag>*/}
              <Tag color="cyan">活动</Tag>
              {/*<Tag color="blue">blue</Tag>*/}
              {/*<Tag color="geekblue">geekblue</Tag>*/}
              {/* <Tag color="purple">冰红活动</Tag> */}
            </div>
            <div className="wrapper">
              <div>请输入总人数</div>
              <input
                  type="text"
                  className="form-control"
                  placeholder="请输入"
                  value={this.state.count}
                  onChange={(e)=>{this.setState({count:e.target.value})}}
              />
              <div>请输入每组人数</div>
              <input
                  type="text"
                  className="form-control"
                  placeholder="请输入"
                  value={this.state.perGroup}
                  onChange={(e)=>{this.setState({perGroup:e.target.value})}}
              />
            <button className="btn" onClick={()=>{this.generateOccu(this.state.count, this.state.perGroup)}}>生成</button>
            </div>
            <Numbers arr={this.state.arr}/>

          </div>
        </div>
    );
  }
}

export const Person = withRouter(PersonReact)
