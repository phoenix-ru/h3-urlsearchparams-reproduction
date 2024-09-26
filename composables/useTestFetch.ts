import { callWithNuxt } from "#app"

export default function useTestFetch() {
  return {
    doTestFetch
  }
}

async function doTestFetch() {
  const nuxt = useNuxtApp()

  // @ts-expect-error `options` is typed as any, but is a valid parameter for URLSearchParams
  const body = new URLSearchParams({
    csrfToken: '',
    callbackUrl: '',
    json: true
  })

  function fetchTest() {
    return $fetch('/api/test', {
      method: 'POST',
      params: undefined,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body
    })
  }

  const data = await callWithNuxt(nuxt, fetchTest)

  return data
}
