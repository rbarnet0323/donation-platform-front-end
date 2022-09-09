export default function NavBar(props) {
  if (props.isHome) {
    return (
      <div style="display:flex;border:1px solid black;border-radius:5px;background-color:white">
        <div style="width:15%;margin-top:auto;margin-bottom:auto;padding:1%">
          <img
            src="/logo.svg"
            height="100%"
            alt="HUMANKIND logo"
          />
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:70%">
          <h1 style="font-weight:bold">HUMANKIND</h1>
          <p>a platform for compassion...</p>
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:10%">
          <a href="/about">About</a>
        </div>
      </div>
    );
  }
  else {
    return (
      <div style="display:flex;border:1px solid black;border-radius:5px;background-color:white">
        <div style="width:15%;margin-top:auto;margin-bottom:auto;padding:1%">
          <img
            src="/logo.svg"
            height="100%"
            alt="HUMANKIND logo"
          />
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:70%">
          <h1 style="font-weight:bold">HUMANKIND</h1>
          <p>a platform for compassion...</p>
        </div>
        <div style="margin-top:auto;margin-bottom:auto;width:10%">
          <a href="/">Home</a>
        </div>
      </div>
    );
  }
}
