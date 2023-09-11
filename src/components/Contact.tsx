import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Hide } from "../styles/Styles";
import animationdata from "../../src/assets/paper.json";
import Lottie from "lottie-react";

type Inputs = {
  to_name: string;
  from_name: string;
  message: string;
};

export default function Contact() {
  const [success, setSuccess] = useState<boolean | null>(null);
  const ref = useRef<HTMLFormElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(ref.current);
    emailjs
      .sendForm(
        "service_w738nml",
        "template_iwj0h03",
        ref.current as HTMLFormElement,

        "7j8ZCi3gTrC9-IGNK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );

    console.log(data);
    setSuccess(true);
  };

  return (
    <Section id="contact">
      <PaperImg>
        <Lottie animationData={animationdata} />
      </PaperImg>
      <Wrapper>
        <div>
          <Hide>
            <motion.h2>
              <span>03.</span> CONTACT
            </motion.h2>
          </Hide>

          <p style={{ fontSize: "0.8rem", marginBottom: "2rem" }}>
            Get in touch or shoot me an email directly on
          </p>
          {success ? (
            <div>
              <p>I'll be in touch soon 💤</p>
              <span></span>
            </div>
          ) : (
            <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  placeholder="Name"
                  style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                  {...register("to_name", { required: true })}
                  aria-invalid={errors.to_name ? "true" : "false"}
                />
                <div className="bar"></div>
                {errors.to_name?.type === "required" && (
                  <p
                    style={{ color: "#eb638b", fontSize: "15px" }}
                    role="alert"
                  >
                    Name
                  </p>
                )}
              </div>
              <div>
                <Input
                  placeholder="Email"
                  style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                  {...register("from_name", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.from_name ? "true" : "false"}
                />
                <div className="bar"></div>
                {errors.from_name && (
                  <p
                    style={{ color: "#eb638b", fontSize: "15px" }}
                    role="alert"
                  >
                    {errors.from_name.message}
                  </p>
                )}
              </div>
              <div>
                <TextArea
                  placeholder="Write your message"
                  style={{ fontFamily: "Raleway", fontStyle: " sans-serif" }}
                  {...register("message", { required: true })}
                />
              </div>
              <div>
                <Btn type="submit">Hit me up! 🚀</Btn>
              </div>
              {success && "Your message has been sent 💭"}
            </form>
          )}
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.div`
  max-width: 1080px;
  height: 100vh;

  padding: 2rem 2rem;
  margin: auto;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  /* display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px; */
`;
const Input = styled.input`
  background: transparent;
  /* margin-bottom: 2rem; */
  resize: none;
  box-shadow: none !important;
  padding: 24px 21px !important;
  border: 1px solid #14202b;
`;
const TextArea = styled.input`
  background: transparent;
  margin-bottom: 2rem;
  resize: none;

  box-shadow: none !important;
  padding: 24px 21px !important;
  border: 1px solid #14202b;
`;
const Btn = styled.button`
  border-radius: 5px;
  padding: 15px 40px;
  margin-bottom: 3rem;
  color: #5ce8d2;
`;
const PaperImg = styled.div`
  position: absolute;
  z-index: 1000;
  animation: flyPaperPlane 10s linear infinite;

  @keyframes flyPaperPlane {
    0% {
      left: 0%;
      top: 50%;
    }
    25% {
      left: 25%;
      top: 0;
    }
    50% {
      left: 50%;
      top: 50%;
    }
    75% {
      left: 75%;
      top: 10%;
    }
    100% {
      left: 100%;
      top: 50%;
    }
  }
`;
