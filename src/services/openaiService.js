import axios from 'axios';

const openaiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const getGPTResponse = async (prompt) => {
  try {
    const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-4o-mini',
          prompt: 'Give me advice on meditation',
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiApiKey}`,
          },
        }
      );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching the GPT response:', error);
    throw error;
  }
};