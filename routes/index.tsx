/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`w-screen h-screen`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <ins className="adsbygoogle"
          style="display:inline-block;width:728px;height:90px"
          data-ad-client="ca-pub-1234567890123456"
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
          <div style="margin-top:auto;margin-bottom:auto">
            <h1 style="font-weight:bold">HUMANKIND</h1>
            <p>a platform for compassion...</p>
          </div>
        </div>
        <div style="display:flex;margin-top:2.5%">
          <p>User not found...</p>
        </div>
      </div>
    </div>
  );
}
