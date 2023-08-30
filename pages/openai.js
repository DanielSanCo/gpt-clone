const { configuration, OpenAiApi } = require('openai');
const configuration = new configuration({ apiKey: "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"})
const openai = new OpenAiApi(configuration);

export async function sendMsgToOpenAi(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choices[0].text;
}