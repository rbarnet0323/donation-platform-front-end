/** @jsx h */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";

export default function Profile(props) {
  return (
    <div style="display:flex;margin-top:2.5%;height:400px">
      <div style="width:22.5%;margin-top:auto;margin-bottom:auto">
        <div style="border-radius:50%;overflow: hidden">
          <img
            src={props.profilePicture}
            height="100%"
            alt="profile picture"
          />
        </div>
      </div>
      <div style="width:75%;margin-left:2.5%">
        <h1 style="font-weight:bold;height:5%">{props.username}:</h1>
        <p style="border:1px solid black;border-radius:5px;height:95%">{props.biography}</p>
      </div>
    </div>
  );
}
