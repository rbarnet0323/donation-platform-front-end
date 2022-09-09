export default function LoginForm() {
  return (
    <form id="loginForm" method="POST" action="/signin">
      <input type="identifier" name="identifier" placeholder="email address" style="width:100%;border:1px solid black;border-radius:5px;margin-top:2.5%;text-align:center"/>
      <input type="password" name="password" placeholder="password" style="width:100%;border:1px solid black;border-radius:5px;margin-top:2.5%;text-align:center"/>
      <button type="submit" style="width:100%;border:1px solid black;border-radius:5px;margin-top:2.5%">Login</button>
    </form>
  );
}
