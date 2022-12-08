import React from "react";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import AvatarUploader from "react-avatar-uploader";
import './ChangeAvatar.css'


function ChangeAvatar() {
  const getInfo = (error, response) => {
    console.log("rfgdg", error, response);
  };

  return (
   <>
      <AvatarUploader
        size={64}
        uploadURL="https://png.pngtree.com/element_our/20190601/ourmid/pngtree-file-upload-icon-image_1344393.jpg"
        name={"avatar"}
        onProgress={function (percentage) {
          return console.log("djfhsdjkfksdf", percentage);
        }}
        onFinished={(error, response) => getInfo(error, response)}
        fileType={"all"}
        defaultImg={
          "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"
        }
      />
    </>
  );
}


export default ChangeAvatar;

