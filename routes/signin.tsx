/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function SignIn() {
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
              <a href="https://humankind.ltd/about">About</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
