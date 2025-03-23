export let assistantId = "asst_J9bOqM90lGrDai31bmJogZyl"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
