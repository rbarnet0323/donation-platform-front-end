/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class={tw`w-screen h-screen`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <GoogleAd/>
          <NavBar isHome={true}/>
          <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='https://humankind.ltd/signin'">Login</button>
          <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='https://humankind.ltd/signup'">Create Account</button>
          <p style="text-align:center;margin-top:2.5%">HUMANKIND is currently in construction...</p>
        </div>
      </div>
    </Fragment>
  );
}
