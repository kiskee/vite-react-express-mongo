import React, { useState } from "react";
import axios from "axios";
import md5 from "md5";
import login from "../css/Login.module.css";

function Login() {
  //Hooks
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const logi = async (credentials) => {
    const { data } = await axios.post("/api/logi", credentials);
    return data;
  };

  const logini = async (event) => {
    try {
      const useri = await logi({
        useremail,
      });
      if (useri[0].password === md5(password)) {
        window.sessionStorage.setItem("Logged",useremail);
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={login.mainMenuHolder}>
        <svg
          className={login.mainMenuLogo}
          viewBox="0 0 107 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.6199 19.6662H33.2979V0H37.6199V19.6662Z"
            fill="#691F74"
          ></path>
          <path
            d="M44.1821 13.4429C44.43 15.2491 45.9712 16.3583 47.8138 16.3583C49.107 16.3583 50.4293 15.6662 51.0856 14.5816L54.1922 16.638C52.9525 18.8859 50.862 20 47.8624 20C45.5774 20 43.6814 19.2785 42.111 17.8356C40.5699 16.3632 39.8018 14.5031 39.8018 12.2258C39.8018 10.0859 40.5699 8.27975 42.0867 6.75337C43.6279 5.22699 45.4704 4.47607 47.5901 4.47607C49.7633 4.47607 51.5232 5.173 52.8747 6.53251C54.2263 7.89202 54.9118 9.69815 54.9118 11.892C54.9118 12.584 54.8826 13.1141 54.8583 13.4478H44.1821V13.4429ZM50.6238 10.5816C50.512 9.27607 49.4424 8 47.488 8C46.6081 8 45.8642 8.27975 45.2857 8.8589C44.7072 9.4135 44.3766 9.99754 44.2939 10.5816H50.6238Z"
            fill="#691F74"
          ></path>
          <path
            d="M66.5954 19.6663V11.4455C66.5954 9.69825 65.7154 8.55468 64.0382 8.55468C62.3026 8.55468 61.3983 9.80622 61.3983 11.4455V19.6663H57.1055V4.60868H61.3691V6.778H61.3983C61.7581 6.16941 62.2248 5.69334 62.8568 5.33506C64.15 4.58414 64.9181 4.55469 65.555 4.55469C67.3149 4.55469 68.6373 5.10929 69.5173 6.24794C70.4264 7.38659 70.8639 8.77554 70.8639 10.4443V19.6663H66.5954Z"
            fill="#691F74"
          ></path>
          <path
            d="M31.1147 4.60864V12.1375V19.6663H26.7927V18.8712C25.835 19.3669 24.7751 19.6663 23.6521 19.6663C19.5343 19.6663 16.1943 16.2945 16.1943 12.1375C16.1943 7.98042 19.5343 4.60864 23.6521 4.60864C24.7751 4.60864 25.8398 4.90803 26.7927 5.40373V4.60864H31.1147ZM23.9194 15.7545C25.8526 15.7545 27.4197 14.1285 27.4197 12.1227C27.4197 10.1168 25.8526 8.49075 23.9194 8.49075C21.9861 8.49075 20.419 10.1168 20.419 12.1227C20.419 14.1285 21.9861 15.7545 23.9194 15.7545Z"
            fill="#691F74"
          ></path>
          <path
            d="M80.9704 8.97176V4.60858H77.3387V0H73.0459V4.60858V8.96686V14.081C73.0459 17.5509 75.0538 19.6662 78.8799 19.6662C79.5945 19.6662 80.2557 19.5828 80.8877 19.3865V15.9116H80.1196C80.0467 15.9166 79.9737 15.9165 79.896 15.9165C78.2187 15.9165 77.3387 15.2491 77.3387 13.5558V8.97176H80.9704Z"
            fill="#691F74"
          ></path>
          <path
            d="M14.3516 8.97176V4.60858H10.8026V0H6.50977V4.60858V8.96686V14.081C6.50977 17.5509 8.51763 19.6662 12.3437 19.6662C13.0584 19.6662 13.7196 19.5828 14.3516 19.3865V15.9116H13.5835C13.5105 15.9166 13.4376 15.9165 13.3598 15.9165C11.6826 15.9165 10.8026 15.2491 10.8026 13.5558V8.97176H14.3516Z"
            fill="#691F74"
          ></path>
          <path
            d="M0.486328 8.97183V4.60864H4.80833V8.96692H0.486328V8.97183Z"
            fill="#FE3B1F"
          ></path>
          <path
            d="M83.4712 8.44829C83.0266 8.00148 82.7939 7.45077 82.7939 6.83252C82.7939 5.55445 83.8072 4.51538 85.0789 4.51538C86.3506 4.51538 87.3639 5.55965 87.3639 6.83252C87.3639 7.45077 87.1313 8.00148 86.6867 8.44829C86.2421 8.89509 85.7148 9.12888 85.0789 9.12888C84.4689 9.12888 83.9157 8.89509 83.4712 8.44829Z"
            fill="#FE3B1F"
          ></path>
          <path
            d="M84.0771 18.8319C83.4693 18.2184 83.1582 17.4528 83.1582 16.5399C83.1582 15.6712 83.4693 14.9202 84.0771 14.2822C84.6848 13.6442 85.4432 13.335 86.3474 13.335C87.7233 13.335 88.7345 14.0859 89.0991 15.1853L87.9275 15.7153C87.6649 14.9644 87.135 14.5816 86.3572 14.5816C85.8516 14.5816 85.4286 14.7681 85.0737 15.1264C84.7285 15.4847 84.5584 15.946 84.5584 16.5153C84.5584 17.0945 84.7285 17.5705 85.0737 17.9386C85.4189 18.3116 85.8516 18.4932 86.3717 18.4932C87.1399 18.4932 87.6649 18.1104 87.9518 17.3448L89.1429 17.8797C88.9727 18.3754 88.6373 18.8172 88.1706 19.1902C87.699 19.5583 87.0913 19.7448 86.3474 19.7448C85.4383 19.7448 84.6848 19.4454 84.0771 18.8319Z"
            fill="#691F74"
          ></path>
          <path
            d="M95.5073 14.2476C96.1393 14.8611 96.4456 15.6121 96.4456 16.5151C96.4456 17.428 96.1344 18.1937 95.5073 18.817C94.8898 19.4305 94.1314 19.7446 93.2271 19.7446C92.3326 19.7446 91.5645 19.4305 90.9324 18.817C90.3004 18.2035 89.9941 17.4378 89.9941 16.5348C89.9941 15.6317 90.315 14.8661 90.947 14.2526C91.579 13.6391 92.3472 13.325 93.2417 13.325C94.1217 13.3348 94.8752 13.6341 95.5073 14.2476ZM91.3894 16.5151C91.3894 17.0599 91.5596 17.5213 91.9048 17.9139C92.2499 18.2967 92.6972 18.493 93.2369 18.493C93.7765 18.493 94.2238 18.3065 94.5544 17.9237C94.885 17.5409 95.06 17.0795 95.06 16.5348C95.06 15.99 94.8898 15.5286 94.5446 15.1458C94.2141 14.763 93.7668 14.5765 93.2271 14.5765C92.6875 14.5765 92.2402 14.763 91.895 15.1458C91.5645 15.5237 91.3894 15.9753 91.3894 16.5151Z"
            fill="#691F74"
          ></path>
          <path
            d="M101.618 19.6415V16.1667C101.618 15.2391 101.205 14.6256 100.301 14.6256C99.4742 14.6256 98.9589 15.2636 98.9589 16.201V19.6366H97.5928V13.4575H98.9249V14.2918C99.4062 13.644 100.014 13.3201 100.748 13.3201C101.633 13.3201 102.26 13.6538 102.639 14.3409C103.271 13.644 103.864 13.3201 104.773 13.3201C106.251 13.3201 107 14.3409 107 15.8182V19.6366H105.634V16.152C105.634 15.2145 105.235 14.6256 104.326 14.6256C103.49 14.6256 102.975 15.2489 102.975 16.1863V19.6366H101.618V19.6415Z"
            fill="#691F74"
          ></path>
        </svg>
      </div>
      <div className={login.mainWrap}>
        <div className={login.sasTitle}>SAS Login</div>

        <div className={login.sasInputHolder}>
          <div className={login.sasInputLabel}>Email</div>
          <div className={login.sasInputText}>
            <img
              className={login.sasInputIcon}
              src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=mail_icon&size=24&color=661D72"
            />
            <input
              className={login.sasInput}
              type="text"
              value={useremail}
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className={login.sasInputHolder}>
          <div className={login.sasInputLabel}>Password</div>
          <div className={login.sasInputText}>
            <img
              className={login.sasInputIcon}
              src="https://cdn-dynamic.talent.com/ajax/img/get-svg.php?icon=lock&size=24&color=661D72"
            />
            <input
              className={login.sasInput}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
        </div>

        <button onClick={logini} className={login.sasMainAction}>
          Login
        </button>
        <div className="sas-help">
        You can create a SAS account if you don't have one already. You can reset your password if your account is locked. 
            <div className={login.linkis}>
                <a className={login.sasLink}>Login</a> · 
                <a className={login.sasLink} >Logout</a> · 
                <a className={login.sasLink} >Reset password</a> ·
                <a className={login.sasLink} >Resend Activation Link</a>
            </div>  
        </div>
      </div>
      
      <footer>
            <div className={login.footerInfo}>
                <a className={login.mainFooter} rel="nofollow" href="/get-started">Help</a>
                <div className="footer__separation">·</div>
                <a className={login.mainFooter} rel="nofollow" href="/tos#privacy">Privacy Policy </a>
                <div className="footer__separation">·</div>
                <a className={login.mainFooter} rel="nofollow" href="/tos">Terms of Service </a>
                <div className="footer__separation">·</div>
                <div className={login.mainFooter}>© Talent.com</div>
            </div>
        </footer>
    </>
  );
}

export default Login;
