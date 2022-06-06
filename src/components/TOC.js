import { Component } from 'react';
//import './App.css';

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) { // 이 함수는 새롭게 바뀐 값과 이전값에 접근이 가능
    console.log('===> TOC render shoudlComponentUpdate'
    ,newProps.data
    ,this.props.data
    );
    if(this.props.data === newProps.data) { //새롭게 바뀐 값이 없다면 render함수가 다시 호출 되지 않도록 함.
        return false;
    }
    return true; // return 값이 true이면 render 함수가 호출, false 이면 render 가 호출 되지 않음.
  }

    render() {
      var lists = [];
      var data = this.props.data; //App.js의 render 함수 안에 props로 data가 선언되어 있음.
      var i = 0;
      while (i < data.length) {
        lists.push(<li key = {data[i].id}>
          <a 
            href ={"/content/"+data[i].id}
            data-id = {data[i].id}
            onClick = {function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); //App.js 에 있는 onChagePage의 props
            }.bind(this)}
           >   
            {data[i].title}</a></li>)
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