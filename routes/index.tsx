/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw `w-screen h-screen`}>
      <script>document.title="HUMANKIND"</script>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <img
          src="/logo.svg"
          width="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
      <div
        style="position:absolute;bottom:0px;left:0px;right:0px;height:90px">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9175508409686273" crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
          style="position:relative;display:inline-block;width:100%;height:90px"
          data-ad-client="ca-pub-1234567890123456"
          data-ad-slot="1234567890">
        </ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </div>
    </div>
  );
}
