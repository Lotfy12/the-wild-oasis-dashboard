import { useMutation } from "@tanstack/react-query";

import { login as loginApi } from "../../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function UseLogin() {
  const navigate = useNavigate();

  const { mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("login sucessfully");
    },
    onError: () => {
      toast.error("error in email or password");
    },
  });

  return { login };
}
