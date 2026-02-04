import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/getCabins";
function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New cabin successfully added");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: () => {
      toast.error("Could not add new cabin");
    },
  });

  return { mutate };
}

export default useCreateCabin;
