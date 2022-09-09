import { Head } from "$fresh/runtime.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function Cancel() {
  return (
    <>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class="w-screen h-screen">
        <div class="p-4 mx-auto max-w-screen-md">
          <GoogleAd/>
          <NavBar isHome={false}/>
          <p style="margin-top:2.5%">- Your donation has been canceled.</p>
          <p>- Your card was not charged.</p>
        </div>
      </div>
    </>
  );
}
