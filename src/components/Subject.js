import { Component } from 'react';

class Subject extends Component {
    render() {
      return (
    <header>
            <h1><a href = "/" onClick = {function(e) { 
                  //console.log(e);
                  //debugger; chrome 개발자도구에서 debugger가 걸린 화면에서 멈추고 source를 보여줌
                  e.preventDefault(); //이벤트가 기본적으로 동작하는 태그를 막음
                  //this.state.mode = 'welcome'; //function안에 세팅된 this의 값이 뭘 가르키는지 알 수 없어서 error
                  this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a> 
            </h1>
                {this.props.sub}
        </header> 
      );
    }
  }

  export default Subject;
  