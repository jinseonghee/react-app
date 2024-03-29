import { Component } from 'react';

class UpdateContent extends Component {

  
    constructor(props){
      super(props);
      //console.log("title1", this.props.data.title);
      //console.log("title2", this.props);
      //console.log("title3", this.data.title);
      this.state = {
        id : this.props.data.id,
        title : this.props.data.title,
        desc : this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e){
      this.setState({[e.target.name] : e.target.value});
    }

    render() {
      console.log(this.props.data);
      console.log('updateContent render');
      return (
        <article>
          <h2>Update</h2>
           {/*form tag의 action은 리액트를 사용 안할 때 사용자가 입력한 정보를
          action 페이지에 전송한다는 의미, method는 사용자가 데이터를 추가, 삭제, 수정 할 때 항상 post 방식으로 사용해야 데이터가 url에 노출되지 않음
          onSubmit은 submit버튼을 눌렀을 때 발생하는 이벤트로 html 고유 기능이다.*/}
          <form action = "/create_process" method = "post"
                onSubmit = {function(e){
                e.preventDefault();
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc
                  //e.target.title.value,
                  //e.target.desc.value
                );
                }.bind(this)}
          >
            <input type = "hidden" name = "id" value = {this.state.id}></input> {/*어디를 수정할지를 식별하기 위한 hidden tag 필요*/}
            <p>
              <input 
              type = "text" 
              name = "title" 
              placeholder = "title"
              value = {this.state.title} // props를 쓰면 Read-only이기 때문에 값을 바꿀수 없다.
              onChange = {this.inputFormHandler}
              ></input></p>
            <p>
              <textarea 
              onChange = {this.inputFormHandler}
              name = "desc"
              placeholder = "description"
              value = {this.state.desc}
              ></textarea></p>
            <p><input type = "submit"></input></p>
          </form>
         </article>
      );
    }
  }
  
  export default UpdateContent;