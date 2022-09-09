import { Head } from "$fresh/runtime.ts";

function updateBiography(newValue) {
  console.log('test' + newValue);
}

export default function Profile(props) {
  if (props.edit) {
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
          <textArea style="resize:none;width:100%;border:1px solid black;border-radius:5px;height:95%" value={props.biography}/>
        </div>
      </div>
    );
  }
  else {
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
}
