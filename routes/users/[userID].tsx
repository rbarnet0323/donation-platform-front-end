/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import Stripe from "https://esm.sh/stripe?target=deno";
import GoogleAd from "../../islands/GoogleAd.tsx";
import NavBar from "../../islands/NavBar.tsx";

const stripe = Stripe("sk_test_51LWRSgJCDjxWO9cJNB4j8iMgZd68TzXoPJ48IMjuZMrYKBFzEu5vMr7hvzV1kOyTxoTfDsSclaus35ymQUSjbIL600K38H6PJP", {
  httpClient: Stripe.createFetchHttpClient(),
});
var session;

export const handler: Handlers<Object | null> = {
  GET: async (_, ctx) => {
    const userID = ctx.params.userID;
    const res = await fetch(
      `https://donation-platform-back-end.herokuapp.com/api/users/${userID}?populate=*`,
    );
    if (res.status === 404 || res.status === 204 || res.status === 500) {
      return ctx.render(null);
    }
    const user: Object = await res.json();
    const product = await stripe.products.create({name: `Donation to ${user.username}`, images: ["https://res.cloudinary.com/durryigjy/image/upload/v1660586664/Logo_d8d2ade843.png?updated_at=2022-08-15T18:04:27.879Z"]});
    const price = await stripe.prices.create({
      currency: "usd",
      custom_unit_amount: {enabled: true},
      product: product.id,
    });
    session = await stripe.checkout.sessions.create({
      success_url: "https://humankind.ltd/success/?id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://humankind.ltd/cancel",
      payment_method_types: ["card"],
      submit_type: "donate",
      line_items: [{
        price: price.id,
        quantity: 1,
      }],
      mode: "payment",
      payment_intent_data: {
        metadata: {
          userID: userID,
        }
      },
      metadata: {
        userID: userID,
      }
    });
    return ctx.render({ user: user });
  },
};

export default function PageComponent({ data }: PageProps<Object | null>) {
  if (!data) {
    return (
      <Fragment>
        <Head>
          <title>HUMANKIND</title>
        </Head>
        <div class={tw`w-screen h-screen`}>
          <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <GoogleAd/>
            <NavBar isHome={false}/>
            <div style="display:flex;margin-top:2.5%">
              <p>User not found...</p>
            </div>
          </div>
        </div>
      </Fragment>
    ); 
  }
  return (
    <Fragment>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class={tw`w-screen h-screen`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <GoogleAd/>
          <NavBar isHome={false}/>
          <div style="display:flex;margin-top:2.5%;height:400px">
            <div style="width:22.5%;margin-top:auto;margin-bottom:auto">
              <div style="border-radius:50%;overflow: hidden">
                <img
                  src={data.user.profilePicture.url}
                  height="100%"
                  alt="profile picture"
                />
              </div>
            </div>
            <div style="width:75%;margin-left:2.5%">
              <h1 style="font-weight:bold;height:5%">{data.user.username}:</h1>
              <p style="border:1px solid black;border-radius:5px;height:95%">{data.user.biography}</p>
            </div>
          </div>
          <form method="GET" action={session.url}>
            <button type="submit" style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center">Donate</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
