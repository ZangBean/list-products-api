import { useState } from 'react'

export default function useModal() {
  const [selected, setSelected] = useState(null)

  const open = (item) => setSelected(item)
  const close = () => setSelected(null)

  return { selected, open, close }
}
