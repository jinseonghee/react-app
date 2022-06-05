import { Component } from 'react';
//import './App.css';

class TOC extends Component {
    render() {
      var lists = [];
      var data = this.props.data; //App.js의 render 함수 안에 props로 data가 선언되어 있음.
      var i = 0;
      while (i < data.length) {
        lists.push(<li key = {data[i].id}><a href ={"/content/"+data[i].id}>{data[i].title}</a></li>)
        i = i + 1;
      }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
      </nav>
      );
    }
  }

  export default TOC;