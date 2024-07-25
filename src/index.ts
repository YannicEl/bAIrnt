import { Ollama } from 'ollama'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })
const message = { role: 'user', content: 'Why is the sky blue?' }
const response = await ollama.chat({ model: 'llama3.1:8b', messages: [message], stream: true })
for await (const part of response) {
  process.stdout.write(part.message.content)
}