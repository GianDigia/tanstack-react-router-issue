import type { FC } from "react"

type Props = {
  name: string
}

export const PropsPage: FC<Props> = ({ name }) => {
  return <div>PropsPage {name}</div>
}