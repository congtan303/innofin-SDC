
import React from "react";
import avatar from "../../asset/image\ 13.png"
import AvatarUploader from "react-avatar-uploader";
import './ChangeAvatar.css'

const ChangeAvatar = () => {
  const getInfo = (error, response) => {
    console.log("rfgdg", error, response);
  };
  return (
    <>
      <AvatarUploader
        size={64}
        uploadURL={avatar}
        name={"avatar"}
        onProgress={function (percentage) {
          return console.log("djfhsdjkfksdf", percentage);
        }}
        onFinished={(error, response) => getInfo(error, response)}
        fileType={"all"}
        defaultImg={avatar}
      />
    </>
  );
};
export default ChangeAvatar;

