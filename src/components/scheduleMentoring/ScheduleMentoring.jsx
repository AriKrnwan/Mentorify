import { useState } from "react";
import MentoringAkanDatang from "./MentoringAkanDatang";
import MentoringSelesai from "./MentoringSelesai";


const ScheduleMentoring = () => {
  const [ubahMenu, setUbahMenu] = useState("post_dibuat");
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex">
        <div
          onClick={() => setUbahMenu("post_dibuat")}
          className={ubahMenu === "post_dibuat" ? "post-dibuat active" : "post-dibuat"}
        >
          Mentoring Akan Datang
        </div>
        <div
          onClick={() => setUbahMenu("post_dijawab")}
          className={ubahMenu === "post_dijawab" ? "post-dijawab active" : "post-dijawab"}
        >
          Mentoring Selesai
        </div>
      </div>
      {ubahMenu === "post_dibuat" && <MentoringAkanDatang />}
      {ubahMenu === "post_dijawab" && <MentoringSelesai />}
    </div>
  )
}

export default ScheduleMentoring