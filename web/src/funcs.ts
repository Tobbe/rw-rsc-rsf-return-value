'use server'

// module state on server
let counter = 0

export const getCounter = () => counter

export const increment = async (delta: number) => {
  console.log('delta', delta)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  counter += delta || 1
  console.log('returning counter', counter)
  return counter
}
