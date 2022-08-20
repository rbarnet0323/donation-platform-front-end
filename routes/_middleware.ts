import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies, setCookie } from "https://deno.land/std@0.150.0/http/cookie.ts";
import * as redis from "https://deno.land/x/redis@v0.26.0/mod.ts";

const store = await redis.connect({
  password: "o7ixNelAea8engQHRisEqlB5iBtqLscl",
  hostname: "redis-18739.c83.us-east-1-2.ec2.cloud.redislabs.com",
  port: 18739,
});

const createSession = async () => {
  const session = {
    uuid: crypto.randomUUID(),
  };
  await store.set(session.uuid, JSON.stringify(session));
  await store.expire(session.uuid, 7 * 24 * 60 * 60);
  return session;
};

const setupSession = async (req, ctx) => {
  const cookies = getCookies(req.headers);
  if (cookies.sesh) {
    const session = await store.get(cookies.sesh);
    if (session) {
      ctx.state = JSON.parse(session);
    } else {
      ctx.state = await createSession();
    }
  } else {
    ctx.state = await createSession();
  }
  const res = await ctx.next();
  setCookie(res.headers, { name: "sesh", value: ctx.state.uuid });
  return res;
};

export async function handler( req: Request, ctx: MiddlewareHandlerContext<State>,) {
    const startTime = Date.now();
    const withSession = [
      "/",
      "/signin",
      "/signout",
    ];
    let res;
    ctx.store = store;
    if (withSession.includes(new URL(req.url).pathname)) {
      res = await setupSession(req, ctx);
    }
    else {
      res = await ctx.next();
    }
    res.headers.set("X-Response-Time", `${Date.now() - startTime}ms`);
    return res;
  }