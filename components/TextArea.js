export const args = {}

const Component = props => {
  const {} = props || {}

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get("id") || ""

  let state = { prompt: "", variables: [], id }

  if (id != "") {
    state = {
      prompt: "Generate {{ n }} jokes for the {{ topic }}",
      variables: [
        { key: "topic", value: "donkey" },
        { key: "n", value: 2 },
      ],
      id,
    }
  }

  function generateAPI() {
    console.log("generateAPI", this.state)
  }

  function api() {
    console.log(this.state)

    const queryString = this.state.variables
      .map(variable => `${variable["key"]}='${variable["value"]}'`)
      .join("&")

    return `https://p2a.toolbomber.com/api/${this.state.id}/?${queryString}`
  }

  const $template = /* HTML */ `
    <div class="w-full flex flex-col gap-4 bg-red-300x px-8">
      <textarea
        placeholder="Prompt with {{ variable }}"
        v-model="state.prompt"
        class="p-2 w-full h-64 rounded text-lg bg-gray-200"
      ></textarea>
      <div
        class="p-2 bg-yellow-300 rounded cp select-none c text-lg font-semibold"
        @click="generateAPI"
      >
        Create API
      </div>
      <div
        :class="{ 'invisible':  state.id == '', 'visisble': state.id != '' }"
        class="w-full bg-red-300x h-24 flex flex-col gap-2"
      >
        <div class="text-white text-opacity-80">API</div>
        <a
          :href="api()"
          class="text-sm p-2 bg-yellow-300 bg-opacity-20 text-yellow-400 cp rounded"
        >
          {{ api() }}
        </a>
      </div>
    </div>
  `

  return {
    $template,
    generateAPI,
    api,
    state,
  }
}

export default Component
