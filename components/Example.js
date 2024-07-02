import _ from "lodash"

export const args = {
  label: "Petite Vue Rocks!",
  handleClick: () => console.log("Click!"),
}

const Example = props => {
  const { label = args.label, handleClick = args.handleClick } = props || {}

  const $template = /* HTML */ `
    <div class="">
      <div
        class="p-2 bg-yellow-300 rounded cp select-none tw-text-600 font-medium"
        @click="handleClick"
      >
        {{ label }}
      </div>
    </div>
  `

  return { $template, label, handleClick }
}

export default Example
