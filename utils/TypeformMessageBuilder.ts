import { Answer } from "../types"

export default (answers: Answer[]): string => {
  const data = answers.map((el) => {
    //@ts-ignore
    const answer = el.type == "choice" ? el.answer["label"] : el.answer
    return `${el.title}: <b>${answer}</b>`
  })

  return data.join("\n\n")
}
