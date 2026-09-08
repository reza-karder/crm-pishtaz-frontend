import { useState } from "react";

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue)

  const toggleValue = () => {
    setValue(prevValue => !prevValue)
  }

  return [value, toggleValue, setValue]
}

export default useToggle