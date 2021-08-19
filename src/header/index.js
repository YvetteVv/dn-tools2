import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { Menu} from 'antd';
import '../App.css'


const { SubMenu } = Menu;
class HeaderReact extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    }
  }

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };
  render() {
    //console.log(this.state.checkedList)

    return (
        <div>
          <ul>
            <li><a className="active">职业转转乐</a></li>
            <li><a >随机分组器</a></li>
          </ul>
        </div>
    );
  }
}

export const Header = withRouter(HeaderReact)
