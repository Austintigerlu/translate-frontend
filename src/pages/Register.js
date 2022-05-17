function Register() {
    return (
      <form>
        <label for="email">Email: </label>
        <input id='email' required type="email"/>
        <br></br>
        <label for="password">Password: </label>
        <input id="password" required type="password"/>
        <br></br>
        <label for="name">Name: </label>
        <input id="name" required type="text"/>
        <br></br>
        <label for="username">Username: </label>
        <input id="username" required type="text"/>
        <br></br>
        <input type="submit" value="Sign Up"/>
      </form>
    );
  }
  
  export default Register;