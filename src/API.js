import axios from "axios";
import { toast } from "react-toastify";

const AxiosPost = async (payload) => {
  try {
    const res = await axios.post(process.env.REACT_APP_BASE_URL, payload);

    toast.success("Message Send Successfully, Thank You!!", {
      position: "top-center",
    });
  } catch (err) {
    // console.log(err);
  }
};

export default AxiosPost;
