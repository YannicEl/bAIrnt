import { readFileSync } from "node:fs";
import { Ollama } from "ollama";

const modelfile = readFileSync("Modelfile-Messages", "utf-8");

const ollama = new Ollama({ host: "http://192.168.0.28:11434" });
await ollama.create({
	model: "BAIRNT",
	modelfile,
});
