


export default getLanguageChannelEvent = (apiKey) =>{
  if (!apiKey) {
    throw Error('getLanguageChannelEvent: apiKey is undefined.');
  }
    const rawResponse = await fetch(`${this.RSI_GATEWAY_API}/tmp-language-channel`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apiKey})
    });
    const content = await rawResponse.json();
    if(content.error){
      throw Error(`getLanguageChannelEvent: An error occured: ${content.error}`)
    }
    const { event } = content.data;
    return { event }


}
  

