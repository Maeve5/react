import logo from '../logo.svg';

function Header(props) {
  return <header className="App-header">
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault(); // a 태그가 동작하는 기본동작을 방지 => 클릭해도 리로드 안 일어남
      props.onChangeMode(); // onClick 함수가 호출됐을 때 onChangeMode 함수도 호출시킴
    }}>{props.title}</a></h1>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
}

export default Header;