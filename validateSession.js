export const validateSession = (req, ctx) => {
  if (ctx.state.jwt) {
    return ctx.render({ ...ctx.state });
  } else {
    return new Response(null, {
      headers: {
        "Location": "/signin",
      },
      status: 403,
    });
  }
};