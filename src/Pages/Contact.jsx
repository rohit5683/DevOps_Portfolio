import React, { useState } from "react";
import "./Contact.css";
import contact from "../Assets/Images/Contact.jpg";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if ((!name, !sub, !msg)) {
        toast.error("Please Provide All Fields");
      }
      const res = await axios.post(`http://localhost:8080`, {
        name,
        sub,
        msg,
        email: "killerrohitrocks007@gmail.com",
      });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={contact} alt="Contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-3">
                <div className="row">
                  <h6>
                    Contact with
                    <a
                      href="http://linkedin.com/in/rohitvishwakarma568347"
                      target="blank"
                    >
                      <BsLinkedin color="blue" size={35} className="ms-2" />
                    </a>
                    <a href="https://github.com/rohit5683" target="blank">
                      <BsGithub color="black" size={35} className="ms-2" />
                    </a>
                    <a href="https://www.facebook.com/" target="blank">
                      <BsFacebook color="blue" size={35} className="ms-2" />
                    </a>
                  </h6>
                </div>
              </div>
              <div className="row px-3 mb-4">
                <div className="line" />
                <small className="or text-center">OR</small>
                <div className="line" />
              </div>
              <div className="row px-3">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3"
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="sub"
                  value={sub}
                  onChange={(e) => setSub(e.target.value)}
                  className="mb-3"
                  placeholder="Subject"
                  required
                />
                <textarea
                  type="text"
                  name="msg"
                  className="mb-3"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Write your Message"
                  required
                />
                <button
                  name="submit"
                  onClick={handleSubmit}
                  className="mb-3 button"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
