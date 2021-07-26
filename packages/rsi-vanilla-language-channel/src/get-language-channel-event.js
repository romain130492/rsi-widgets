

export async function getLanguageChannelEvent({apiKey}) {
  if (!apiKey) {
    throw Error('getLanguageChannelEvent: apiKey is undefined.');
  }
  /*   return {
    vpName:'test vpname',
    apiKey:'apikey',
    floor:{code:'en-US', roomName:'prqp'},
    roomNames : [
      { roomName:'mkng', code:'es-ES'}, { roomName:'oqxa', code:'zh-CN' }
    ]
  }  */
    const rawResponse = await fetch("https://s7sf1z5w65.execute-api.cn-north-1.amazonaws.com.cn/prod", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({apiKey})
    });
    const content = await rawResponse.json();
    if(content.statusCode !== 200){
      throw Error(`getLanguageChannelEvent: An error occured:`)
    }
    if(!content.body){
      throw Error(`body is null`)
    }
    const body = JSON.parse(content.body)
    return body.data
}
  

