/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function Error() {
  return (
    <Fragment>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class={tw`w-screen h-screen`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <GoogleAd/>
          <NavBar isHome={false}/>
          <p>- Page not found...</p>
        </div>
      </div>
    </Fragment>
  );
}
