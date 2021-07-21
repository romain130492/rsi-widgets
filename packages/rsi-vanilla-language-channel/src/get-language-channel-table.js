


export default getLanguageChannelTable(apiKey) {
    if (!apiKey) {
      throw Error('base akadu-rsi: apiKey is undefined.');
    }
    if (!roomName) {
      throw Error('base akkadu-rsi: roomName is undefined.');
    }
      const rawResponse = await fetch(`${this.RSI_GATEWAY_API}/authenticate`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({apiKey, roomName})
      });
      const content = await rawResponse.json();
      const body = content.body;
      if(content.error){
        throw Error(`interpretation-player: An error occured: ${body.error}`)
      }
      const { stream , languageState, eventLanguages } = body.data;
      return { stream , languageState, eventLanguages }
  }

