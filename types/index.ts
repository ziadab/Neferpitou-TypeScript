type label = {
  label: string
}

export type Answer = {
  id: string
  title: string
  type: string
  answer: string | number | label
}
