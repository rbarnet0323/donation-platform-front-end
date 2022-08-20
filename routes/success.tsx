/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import Stripe from "https://esm.sh/stripe?target=deno";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";

const stripe = Stripe("sk_test_51LWRSgJCDjxWO9cJNB4j8iMgZd68TzXoPJ48IMjuZMrYKBFzEu5vMr7hvzV1kOyTxoTfDsSclaus35ymQUSjbIL600K38H6PJP", {
  httpClient: Stripe.createFetchHttpClient(),
});
var session;

export const handler: Handlers<Object | null> = {
  GET: async (req, ctx) => {
    const stripeID = req.url.split("=")[1];
    session = await stripe.checkout.sessions.retrieve(stripeID);
    return ctx.render({ stripe: session });
  },
};

export default function PageComponent({ data }: PageProps<Object | null>) {
  return (
    <Fragment>
      <Head>
        <title>HUMANKIND</title>
      </Head>
      <div class={tw`w-screen h-screen`}>
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
          <GoogleAd/>
          <NavBar isHome={false}/>
          <p>- Thank you for your donation to {data.stripe.metadata.username}.</p>
          <p>- Your payment was processed successfully.</p>
        </div>
      </div>
    </Fragment>
  );
}
