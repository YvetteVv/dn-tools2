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
      arr:[]
    }
  }

  generateOccu = (c) => {
    let size = personList.length;
    let newArr = [];
    for (let i = 0; i < c; i++) {
      let index = parseInt(Math.random() * (size));
      newArr.push(personList[index]);
    }
    let group = [
      '第1组：'+ newArr[0] + '，'+ newArr[1],
      '第2组：'+ newArr[2] + '，'+  newArr[3],
      '第3组：'+ newArr[4] + '，'+  newArr[5],
      '第4组：'+ newArr[6] + '，'+  newArr[7],
      '第5组：'+ newArr[8] + '，'+  newArr[9],
      '第6组：'+ newArr[10] + '，'+  newArr[11],
      '第7组：'+ newArr[12] + '，'+  newArr[13],
      '第8组：'+ newArr[14] + '，'+  newArr[15],
      '第9组：'+ newArr[16] + '，'+  newArr[17],
    ]
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
                <li><a onClick={() => {this.props.history.push('/occupation');}}>职业生成器</a></li>
                <li><a className="active" onClick={() => {this.props.history.push('/group');}}>随机抽签器</a></li>
              </ul>
            </div>
            <Divider orientation="left">分组随机抽签器</Divider>

            <div>
              <Tag color="magenta">DN</Tag>
              {/*<Tag color="lime">Destiny公会</Tag>*/}
              {/*<Tag color="volcano">活动</Tag>*/}
              {/*<Tag color="orange">orange</Tag>*/}
              <Tag color="gold">Destiny公会</Tag>
              {/*<Tag color="lime">lime</Tag>*/}
              {/*<Tag color="green">green</Tag>*/}
              <Tag color="cyan">活动</Tag>
              {/*<Tag color="blue">blue</Tag>*/}
              {/*<Tag color="geekblue">geekblue</Tag>*/}
              {/*<Tag color="purple">purple</Tag>*/}
            </div>
            <div className="wrapper">
            <button className="btn" onClick={()=>{this.generateOccu(personList.length)}}>生成</button>
            </div>
            <Numbers arr={this.state.arr}/>
            <Footer style={{ marginTop:'500px',textAlign: 'center',backgroundColor:'#e3f2fd'}}>DragonNest ©2020 Created by 言卿</Footer>
          </div>
        </div>
    );
  }
}

export const Person = withRouter(PersonReact)
