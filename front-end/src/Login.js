import './Login.css'
const Login = props => (
  <div className = "login">
      <h1 className = "login-header">
        Login
      </h1>
      <form className = "login-form">
        <label>
          Username: 
          <input type = "text"  name = "username"/>
        </label>
        <br/>
        <label>
          Password:
          <input type = "text"  name = "password"/>
        </label>
        <br/>
        <input type = "submit" value="Submit" />
      </form>
  </div>
);
export default Login;