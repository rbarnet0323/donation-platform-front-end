import { Head } from "$fresh/runtime.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function Error() {
  return (
    <>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class="w-screen h-screen">
        <div class="p-4 mx-auto max-w-screen-md">
          <GoogleAd/>
          <NavBar isHome={false}/>
          <p style="margin-top:2.5%">- Page not found...</p>
        </div>
      </div>
    </>
  );
}
