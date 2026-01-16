import { Buffer, transcode } from 'node:buffer'

export let textToAscii = (text) => {
  const asciiBuffer = transcode(Buffer.from(text), 'utf8', 'ascii')
  let values = []

  for (const value of asciiBuffer){
    values.push(value)
  }

  return values
}

export let asciiToText = (asciiArray) => {
  const textBuffer = transcode(Buffer.from(asciiArray), 'ascii', 'utf8')
  return textBuffer.toString()
}
