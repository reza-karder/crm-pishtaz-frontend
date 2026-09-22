import { useMutation } from "@tanstack/react-query"
import USER_KEYS from "./keys"
import USER_SERVICES from "./services"

const useEditUser = () => {
  return useMutation({
    mutationKey: USER_KEYS.EDIT_USER,
    mutationFn: USER_SERVICES.editUser
  })
}

export { useEditUser }