import { toast } from "react-toastify";

export const errorToast = (msg) => {
  toast.error(msg);
};

// Success Toast Message
export const successToast = (msg) => {
  toast.success(msg);
};
