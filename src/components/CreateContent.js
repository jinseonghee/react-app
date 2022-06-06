import { Component } from 'react';

class CreateContent extends Component {
    render() {
      return (
        <article>
          <h2>Create</h2>
           {/*form tag의 action은 리액트를 사용 안할 때 사용자가 입력한 정보를
          action 페이지에 전송한다는 의미, method는 사용자가 데이터를 추가, 삭제, 수정 할 때 항상 post 방식으로 사용해야 데이터가 url에 노출되지 않음
          onSubmit은 submit버튼을 눌렀을 때 발생하는 이벤트로 html 고유 기능이다.*/}
          <form action = "/create_process" method = "post"
                onSubmit = {function(e){
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
                //alert("submit!!!!!");
                }.bind(this)}
          >
            <p><input type = "text" name = "title" placeholder = "title"></input></p>
            <p><textarea name = "desc" placeholder = "description"></textarea></p>
            <p><input type = "submit"></input></p>
          </form>
         </article>
      );
    }
  }
  
  export default CreateContent;