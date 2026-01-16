import { Buffer, transcode } from 'node:buffer'

export textToAscii = (text) => {
  const asciiBuffer = transcode(Buffer.from(text), 'utf8', 'ascii')
  let values = []

  for (const value of asciiBuffer){
    values.push(value)
  }

  return values
}
