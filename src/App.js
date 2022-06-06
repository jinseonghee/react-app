//import './App.css';
import { Component } from 'react';
import { extend } from 'colord';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';


class App extends Component {
  constructor(props) { //component의 render 함수가 실행 되기 전 component를 초기화 시켜주고 싶은 값들은 constructor에 넣어준다.
    super(props);
    this.max_content_id = 3; //ui에 영향을 주는 값이 아니기 때문에 state로 할당 안해도 된다.
    this.state = {
      mode : 'create',
      selected_contend_id : 2,
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

    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc ={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contend_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title = {_title} desc ={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
        _article = <CreateContent onSubmit = {function(_title, _desc){
            //add content to this.state.contents
            this.max_content_id = this.max_content_id + 1;
            // this.state.contents.push(
            //   {id : this.max_content_id, title : _title, desc : _desc}
            // );
            var _contents = this.state.contents.concat(
              {id : this.max_content_id, title : _title, desc : _desc}
            );
            this.setState({
              contents : _contents
            });
            console.log(_title, _desc);
        }.bind(this)}></CreateContent>
    }
  return ( //react는 하나의 태그 안쪽에 나머지 태그가 있어야 함. 기징 바깥쪽에는 태그 하나만 있어야 한다.
    <div className="App"> 
      <Subject title = {this.state.subject.title} 
               sub = {this.state.subject.sub} 
               onChangePage = {function() {
                 this.setState ({mode : 'welcome'});
               }.bind(this)}
               >
      </Subject>

      {/* <header>
            <h1>
                <a href = "/" onClick = {function(e) { react는 함수의 첫번째 매개변수 값으로 이벤트 객체를 주입해주도록 약속 
                  //console.log(e);
                  //debugger; chrome 개발자도구에서 debugger가 걸린 화면에서 멈추고 source를 보여줌
                  e.preventDefault(); //이벤트가 기본적으로 동작하는 태그를 막음
                  //this.state.mode = 'welcome'; //function안에 세팅된 this의 값이 뭘 가르키는지 알 수 없어서 error
                  this.setState({ //state의 값을 동적으로 바꾸려면, setState 메서드를 사용
                    mode : 'welcome'
                  });
                }.bind(this)}>{this.state.subject.title}</a> { function evnet가 끝나는 지점에 .bind(this)라고 명시 해야 this를 자기 자신을 가리키는 component라고 인식 
                
            </h1>
                {this.state.subject.sub}
        </header> */}

      {/* <Subject title = "React" sub = "World Wide react" ></Subject> */}
      <TOC 
          onChangePage = {function(id) { //이 id는 TOC.js의 onChanePage의 매개값(e.target.dataset.id)
            this.setState({
              mode : 'read',
              selected_contend_id : Number(id) //Number는 String 을 Integer로 바꿔주는 javascript 문법
            });
        }.bind(this)}
          data = {this.state.contents}
      ></TOC>
      <Control
          onChangeMode = {function(_mode) {
            this.setState({
              mode : _mode
            });
          }.bind(this)}></Control>
        {_article}
    </div>
    );
  }
}

export default App;
//export default 를 사용함으로써 App 안에 있는 변수나 함수들을 외부에서 사용할 수 있도록 해줌
