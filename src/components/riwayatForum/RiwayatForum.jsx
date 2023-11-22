import { useState } from "react";
import "./riwayatForum.css";
import PostDibuat from "../../components/postDibuat/PostDibuat";
import PostDijawab from "../../components/postDijawab/PostDijawab";

const RiwayatForum = () => {
  const [ubahMenu, setUbahMenu] = useState("post_dibuat");

  // const handleClick = () => {
  //   console.log(1)
  // };

  return (
    <div>
      <div className="d-flex">
        <div
          onClick={() => setUbahMenu("post_dibuat")}
          className={ubahMenu === "post_dibuat" ? "post-dibuat active" : "post-dibuat"}
        >
          Postingan yang Dibuat
        </div>
        <div
          onClick={() => setUbahMenu("post_dijawab")}
          className={ubahMenu === "post_dijawab" ? "post-dijawab active" : "post-dijawab"}
        >
          Postingan yang Dijawab
        </div>
      </div>
      {ubahMenu === "post_dibuat" && <PostDibuat />}
      {ubahMenu === "post_dijawab" && <PostDijawab />}
    </div>
  );
};

export default RiwayatForum;
