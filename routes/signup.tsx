import { Head } from "$fresh/runtime.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class="w-screen h-screen">
        <div class="p-4 mx-auto max-w-screen-md">
          <GoogleAd/>
          <NavBar isHome={false}/>
        </div>
      </div>
    </>
  );
}
