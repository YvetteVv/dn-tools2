import React, { Component } from 'react';


import {withRouter} from 'react-router-dom'
import {Numbers} from "../components/Numbers"
import {Checkbox, Layout,Tag, Divider} from "antd";
import {checkList} from "../data.mock"
import "../App.css"

const CheckboxGroup = Checkbox.Group;

const plainOptions = checkList
const defaultCheckedList = checkList
const { Footer } = Layout;
class OccupationReact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      arr: [],
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      count:1
    }
  }

  generateOccu = (c) => {
    let size = this.state.checkedList.length;
    let newArr = [];
    for (let i = 0; i < c; i++) {
      let index = parseInt(Math.random() * (size));
      newArr.push(this.state.checkedList[index]);
    }
    console.log(newArr)
    this.setState({
      arr:newArr
    })
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });

  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });

  };

  render() {
    //console.log(this.state.checkedList)

    return (
      <div className="cell-wall">

        <div className="cell-membrane">
          <div>
            <ul>
              <li><a className="active" onClick={() => {this.props.history.push('/occupation');}}>职业转转乐</a></li>
              <li><a onClick={() => {this.props.history.push('/group');}}>随机分组器</a></li>
              <Footer style={{textAlign: 'center',backgroundColor:'#e3f2fd'}}>DragonNest ©2020 Created by 花卷卷</Footer>
            </ul>
          </div>
          <Divider orientation="left">职业大转盘--幸运转转转</Divider>

          <div>
            <Tag color="magenta">DN</Tag>
            {/*<Tag color="lime">Destiny公会</Tag>*/}
            {/*<Tag color="volcano">活动</Tag>*/}
            {/*<Tag color="orange">orange</Tag>*/}
            <Tag color="gold">职业转转乐</Tag>
            {/*<Tag color="lime">lime</Tag>*/}
            {/*<Tag color="green">green</Tag>*/}
            <Tag color="cyan">活动</Tag>
            {/*<Tag color="blue">blue</Tag>*/}
            {/*<Tag color="geekblue">geekblue</Tag>*/}
            {/*<Tag color="purple">purple</Tag>*/}
          </div>
        <div>
          <br/>
          <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
          >
            全选
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
        />
        <div className="wrapper">
          <div>请输入一次性需要生成的个数</div>

          <input
              type="text"
              className="form-control"
              placeholder="请输入"
              value={this.state.count}
              onChange={(e)=>{this.setState({count:e.target.value})}}
          />
          <button className="btn" onClick={()=>{this.generateOccu(this.state.count)}}>生成</button>
        </div>

        <Numbers arr={this.state.arr}/>
        </div>
      </div>
    );
  }
}

export const Occupation = withRouter(OccupationReact)
