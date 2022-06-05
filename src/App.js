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
      subject : { title : 'WEB', sub : 'World Wide Web' },
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML is for imformation'},
        {id : 2, title : 'CSS', desc : 'CSS is for imformation'},
        {id : 3, title : 'Javascript', desc : 'Javascript is for imformation'}
      ]
    }
  }

  render() {
  return ( //react는 하나의 태그 안쪾에 나머지 태그가 있어야 함. 기징 바깥쪽에는 태그 하나만 있어야 한다.
    <div className="App"> 
      <Subject title = {this.state.subject.title} 
               sub = {this.state.subject.sub} >
      </Subject>
      <Subject title = "React" sub = "World Wide react" ></Subject>
      <TOC data = {this.state.contents}></TOC>
      <Content title = "HTML" desc = "HTML is hyperText Markup Language."></Content>
    </div>
    );
  }
}

export default App;
//export default 를 사용함으로써 App 안에 있는 변수나 함수들을 외부에서 사용할 수 있도록 해줌
