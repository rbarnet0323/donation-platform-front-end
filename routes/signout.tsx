export const handler = {
  async GET(_, ctx) {
    const res = new Response(null, {
      headers: {
        "Location": "/",
      },
      status: 302,
    });
    if (ctx.state?.jwt) {
      let state = ctx.state;
      delete state.user;
      delete state.jwt;
      await ctx.store.set(state.uuid, JSON.stringify(state));
      return res;
    } else {
      return res;
    }
  },
};