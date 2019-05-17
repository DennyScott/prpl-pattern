import React from "react";
import Image from "../../image";

function About(props) {
  return (
    <div>
      <p>Hey there, this is an about page!</p>

      {props.image && (<Image src={props.image.download_url} author={props.image.author} />)}
    </div>
  );
}

export default About;
