/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>HUMANKIND</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9175508409686273" crossorigin="anonymous"></script>
      </Head>
      <div class={tw`w-screen h-screen`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <ins className="adsbygoogle"
            style="display:inline-block;width:728px;height:90px"
            data-ad-client="ca-pub-9175508409686273"
            data-ad-slot="1234567890">
          </ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
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
          <h1 style="font-weight:bold;margin-top:2.5%">Our Mission:</h1>
          <p style="text-align:center">HUMANKIND exists to empower generosity towards the disenfranchised.</p>
          <h1 style="font-weight:bold;margin-top:2.5%">Instructions:</h1>
          <p>1. If you or someone you know is in need of help, simply access a computer at your local public library and create an account with HUMANKIND.</p>
          <p>2. Once you have created an account with HUMANKIND, you can use the printer(s) to print your unique QR code.</p>
          <p>3. Whenever somebody uses their phone to scan your QR code, they will be automatically redirected to your profile where they can make a donation to assist you in your journey.</p>
          <h1 style="font-weight:bold;margin-top:2.5%">Our Team:</h1>
          <p>- Ray Barnett (CTO) <a style="color:blue;text-decoration:underline" href="https://www.linkedin.com/in/ray-barnett-a21b281a6/">LinkedIn</a></p>
          <p>- Phillip Brady (CEO) <a style="color:blue;text-decoration:underline" href="https://www.linkedin.com/in/phillip-brady-a411a1154/">LinkedIn</a></p>
        </div>
      </div>
    </Fragment>
  );
}
