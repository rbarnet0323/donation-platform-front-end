import { Head } from "$fresh/runtime.ts";

export default function GoogleAd() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9175508409686273" crossorigin="anonymous"></script>
      </Head>
      <ins className="adsbygoogle"
        style="display:inline-block;width:728px;height:90px"
        data-ad-client="ca-pub-9175508409686273"
        data-ad-slot="1234567890">
      </ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </>
  );
}
