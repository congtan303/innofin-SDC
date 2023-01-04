import React from "react";
import Avatar from '../../asset/image-avatar.png'
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
        defaultImg={Avatar}
      />
    </>
  );
}


export default ChangeAvatar;

