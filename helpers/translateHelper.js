const { Translate } = require('@google-cloud/translate').v2;

const projectId = 'post-and-comments-ff9bb';

// Instantiates a client
const translate = new Translate({ projectId });

const translateHelper = {
  async translateText () {
    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'es';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }
};

export default translateHelper;
