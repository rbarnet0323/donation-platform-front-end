/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import GoogleAd from "../../islands/GoogleAd.tsx";
import NavBar from "../../islands/NavBar.tsx";

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
                  alt="the fresh logo: a sliced lemon dripping with juice"
                />
              </div>
            </div>
            <div style="width:75%;margin-left:2.5%">
              <h1 style="font-weight:bold;height:5%">{data.user.username}:</h1>
              <p style="border:1px solid black;border-radius:5px;height:95%">{data.user.biography}</p>
            </div>
          </div>
          <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='https://donate.stripe.com/test_3cseVY4gw1nc4VOaEE'">Donate</button>
        </div>
      </div>
    </Fragment>
  );
}
