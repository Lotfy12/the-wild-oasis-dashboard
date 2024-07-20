import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinAPI } from "../../services/getCabins";
import toast from "react-hot-toast";

function UseDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinAPI,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      toast.success("cabin successful deleted");
    },
    onError: () => {
      toast.error("there is an error");
    },
  });
  return {deleteCabin};
}

export default UseDeleteCabin;
