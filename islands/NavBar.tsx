/** @jsx h */
import { h } from "preact";

export default function NavBar(props) {
  if (props.isHome) {
    return (
      <div style="display:flex;border:1px solid black;border-radius:5px">
        <div style="width:15%;margin-top:auto;margin-bottom:auto;padding:1%">
          <img
            src="/logo.svg"
            height="100%"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:70%">
          <h1 style="font-weight:bold">HUMANKIND</h1>
          <p>a platform for compassion...</p>
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:10%">
          <a href="https://humankind.ltd/about">About</a>
        </div>
      </div>
    );
  }
  else {
    return (
      <div style="display:flex;border:1px solid black;border-radius:5px">
        <div style="width:15%;margin-top:auto;margin-bottom:auto;padding:1%">
          <img
            src="/logo.svg"
            height="100%"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:70%">
          <h1 style="font-weight:bold">HUMANKIND</h1>
          <p>a platform for compassion...</p>
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:10%">
          <a href="https://humankind.ltd">Home</a>
        </div>
      </div>
    );
  }
}
