import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const useMail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendMailReq = async (templateData, templateId) => {
    try {
      setIsLoading(true);
      const res = await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        templateId,
        templateData,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      );
      setData(res);

      if (res?.status === 200 && res?.text === "OK") {
        toast.success("Send Successfully, Thank You!!", {
          position: "top-center",
        });
      }
      // console.log("res", res);
    } catch (error) {
      setError(error);
      toast.error("Failed to send", {
        position: "top-center",
      });
      // console.log("error in sending email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, sendMailReq };
};

export default useMail;
