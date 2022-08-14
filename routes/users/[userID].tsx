/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

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
    return <h1>User not found...</h1>;
  }
  return (
    <div class={tw `w-screen h-screen`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <ins className="adsbygoogle"
          style="display:inline-block;width:728px;height:90px"
          data-ad-client="ca-pub-1234567890123456"
          data-ad-slot="1234567890">
        </ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <img
          src="/logo.svg"
          width="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <img
          src={"https://donation-platform-back-end.herokuapp.com" + data.user.profilePicture.url}
          width="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <pre class={tw`my-6`}>
          {JSON.stringify(data.user, null, 2)}
        </pre>
      </div>
    </div>
  );
}
