/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";
import Profile from "../islands/Profile.tsx";

export const handler: Handlers<Object | null> = {
  GET: async (_, ctx) => {
    if (ctx.state.jwt) {
      const userID = ctx.state.user.id;
      const res = await fetch(
        `https://donation-platform-back-end.herokuapp.com/api/users/${userID}?populate=*`,
      );
      if (res.status !== 200) {
        return ctx.render(null);
      }
      const user: Object = await res.json();
      return ctx.render({ user: user });
    }
    else {
      return ctx.render(null);
    }
  },
};

export default function PageComponent({ data }: PageProps<Object | null>) {
  if (data != null) {
    return (
      <Fragment>
        <Head>
          <title>HUMANKIND</title>
        </Head>
        <div class={tw`w-screen h-screen`}>
          <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <GoogleAd/>
            <NavBar isHome={true}/>
            <Profile profilePicture={data.user.profilePicture.url} username={data.user.username} biography={data.user.biography}/>
            <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='/signout'">Sign Out</button>
          </div>
        </div>
      </Fragment>
    );
  }
  else {
    return (
      <Fragment>
        <Head>
          <title>HUMANKIND</title>
        </Head>
        <div class={tw`w-screen h-screen`}>
          <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <GoogleAd/>
            <NavBar isHome={true}/>
            <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='/signin'">Login</button>
            <button style="border:1px solid black;border-radius:5px;width:100%;margin-top:2.5%;text-align:center" onclick="location.href='/signup'">Create Account</button>
            <p style="text-align:center;margin-top:2.5%">HUMANKIND is currently in construction...</p>
          </div>
        </div>
      </Fragment>
    );
  }
}
