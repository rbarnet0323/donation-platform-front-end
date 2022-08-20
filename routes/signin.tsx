/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import GoogleAd from "../islands/GoogleAd.tsx";
import NavBar from "../islands/NavBar.tsx";
import LoginForm from "../islands/LoginForm.tsx";

export const handler: Handlers<Object | null> = {
  POST: async (req, ctx) => {
    let formData = await req.formData();
    var body = new Object();
    for (const pair of formData.entries()) {
      body[pair[0]] = pair[1];
    }
    const res = await fetch(
      "https://donation-platform-back-end.herokuapp.com/api/auth/local",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      },
    );
    if (res.status !== 200) {
      return ctx.render(null);
    }
    let login = await res.json();
    if (login.error) {
      return ctx.render({ error: login.error });
    }
    else {
      let { user, jwt } = login;
      return await ctx.store.set(ctx.state.uuid, JSON.stringify(Object.assign(ctx.state, { user, jwt, }))).then(() => {
        let res = new Response(null, {
          status: 302,
          headers: new Headers({
            location: new URL(req.url).origin + `/`,
          })
        })
        return res;
      });
    }
  },
  GET: async (_, ctx) => {
    return ctx.render(null);
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
            <NavBar isHome={false}/>
            <LoginForm/>
            <pre>{JSON.stringify(data, null, 2)}</pre>
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
            <NavBar isHome={false}/>
            <LoginForm/>
          </div>
        </div>
      </Fragment>
    );
  }
}
