import { Head } from "$fresh/runtime.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function About() {
  return (
    <>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class="w-screen h-screen">
        <div class="p-4 mx-auto max-w-screen-md">
          <GoogleAd/>
          <NavBar isHome={false}/>
          <h1 style="font-weight:bold;margin-top:2.5%">Our Mission:</h1>
          <p style="text-align:center">HUMANKIND exists to empower generosity towards the disenfranchised.</p>
          <h1 style="font-weight:bold;margin-top:2.5%">Instructions:</h1>
          <p>1. If you or someone you know is in need of help, simply access a computer at your local public library and create an account with HUMANKIND.</p>
          <p>2. Once you have created an account with HUMANKIND, you can use the available printer(s) to print your unique QR code.</p>
          <p>3. Whenever somebody uses their phone to scan your QR code, they will be automatically redirected to your profile where they can make a donation to assist you in your journey.</p>
          <p>4. Our withdrawl system is pending design.</p>
          <h1 style="font-weight:bold;margin-top:2.5%">Terms and Conditions:</h1>
          <p>- We do not condone or accept legal responsibility for any exploitation of HUMANKIND to solicit illegal goods and/or services.</p>
          <p>- Unfortunately, we cannot accept legal responsibility for your infringement of local panhandling and/or loitering prohibitions.</p>
          <p>- Any violations of our terms and conditions will result in account suspension.</p>
          <h1 style="font-weight:bold;margin-top:2.5%">Our Team:</h1>
          <p>- Ray Barnett (CTO) <a style="color:blue;text-decoration:underline" href="https://www.linkedin.com/in/ray-barnett-a21b281a6/">LinkedIn</a></p>
          <p>- Phillip Brady (CEO) <a style="color:blue;text-decoration:underline" href="https://www.linkedin.com/in/phillip-brady-a411a1154/">LinkedIn</a></p>
        </div>
      </div>
    </>
  );
}
