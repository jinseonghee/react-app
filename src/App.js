//import './App.css';
import { Component } from 'react';
import { extend } from 'colord';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';


class App extends Component {
  constructor(props) { //component의 render 함수가 실행 되기 전 component를 초기화 시켜주고 싶은 값들은 constructor에 넣어준다.
    super(props);
    this.state = {
      mode : 'welcome',
      subject : { title : 'WEB', sub : 'World Wide Web' },
      welcome : {title : 'Welcome', desc : 'Hello React!!!'},
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML is for imformation'},
        {id : 2, title : 'CSS', desc : 'CSS is for imformation'},
        {id : 3, title : 'Javascript', desc : 'Javascript is for imformation'}
      ]
    }
  }
  render() {

    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
  return ( //react는 하나의 태그 안쪾에 나머지 태그가 있어야 함. 기징 바깥쪽에는 태그 하나만 있어야 한다.
    <div className="App"> 
      {/* <Subject title = {this.state.subject.title} 
               sub = {this.state.subject.sub} >
      </Subject> */}
      <header>
            <h1>
                <a href = "/" onClick = {function(e) { /*react는 함수의 첫번째 매개변수 값으로 이벤트 객체를 주입해주도록 약속 */
                  console.log(e);
                  //debugger; chrome 개발자도구에서 debugger가 걸린 화면에서 멈추고 source를 보여줌
                  e.preventDefault(); //이벤트가 기본적으로 동작하는 태그를 막음
                  //this.state.mode = 'welcome'; //function안에 세팅된 this의 값이 뭘 가르키는지 알 수 없어서 error
                  this.setState({
                    mode : 'welcome'
                  });
                }.bind(this)}>{this.state.subject.title}</a> {/* function evnet가 끝나는 지점에 .bind(this)라고 명시 해야 this를 자기 자신을 가리키는 component라고 인식 */}
                
            </h1>
                {this.state.subject.sub}
        </header>
      <Subject title = "React" sub = "World Wide react" ></Subject>
      <TOC data = {this.state.contents}></TOC>
      <Content title = {_title} desc ={_desc}></Content>
    </div>
    );
  }
}

export default App;
//export default 를 사용함으로써 App 안에 있는 변수나 함수들을 외부에서 사용할 수 있도록 해줌
