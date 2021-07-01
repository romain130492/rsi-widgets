

const component = {
  html:`
  <body>
      <div class="select">
        <div class="selectWrapper" >
          <div class="selectCustom js-selectCustom">
            <div id="interpretation-player-custom-value" class="selectCustom-trigger">  <img src=''/> <h3> </h3> </div>
            <div id="interpretation-player-options" class="selectCustom-options">
          </div>
          </div>
          <button id="interpretation-player-refresh" class="refresh-button" style="display:none;"> <h3> Refresh </h3> </button>
        </div>
  </body>
  `,
  css: ({
    fontFamily = '"Helvetica Neue", Arial, sans-serif',
    backgroundSelectorHeader = '#ffffff',
    fontSizeHeaderSelector,
    backgroundHoverHeaderSelector,
    colorHeaderSelector = '#2C3D4F',
    borderRadiusHeaderSelector = '5px',
    fontSizeOptionSelector,
    colorOptionSelector = '#2C3D4F',
    backgroundOptionSelector = '#ffffff',
    backgroundHoverOptionSelector = '#F2F2F2',
    borderRadiusOptionSelector = '5px',
    optionsDistanceFromHeader = '45px'
  }) => `

  #akkadu-interpretation-player {
    display: inline-table;
    position: relative;
    font-family: ${fontFamily};
  }

  #akkadu-interpretation-player .select {
    position: relative;
  }

  #akkadu-interpretation-player .selectLabel {
    display: block;
    margin-bottom: 10px;
  }

  #akkadu-interpretation-player .selectWrapper {
    position: relative;
  }

  #akkadu-interpretation-player .selectCustom {
    position: relative;
    height: 100%;
  }

  #akkadu-interpretation-player h3, #akkadu-interpretation-player .selectCustom-trigger {
    font-size: 16px;
    color: #2C3D4F;
    font-weight: 400;
  }

  #akkadu-interpretation-player .selectCustom-trigger {
    display: flex;
    position: relative;
    min-width: 150px;
    background-color: ${backgroundSelectorHeader};
    border: 1px solid #dbdbdb;
    border-radius: ${borderRadiusHeaderSelector};
    cursor: pointer;
    padding: 10px 15px;
    width: 100%;
    height: 100%;
  }

  #akkadu-interpretation-player .selectCustom-trigger, #akkadu-interpretation-player .selectCustom-trigger h3 {
    ${ fontSizeHeaderSelector ? `font-size: ${fontSizeHeaderSelector};` : ''  }
    color: ${colorHeaderSelector};
  }

  #akkadu-interpretation-player h3{
    margin:0px;
    padding:0px;
  }
  #akkadu-interpretation-player img{
    margin:0px;
    padding:0px;
    max-width: 20px;
    margin-right:10px;
  }

  #akkadu-interpretation-player .selectCustom-trigger::after {
    content: "▾";
    color: ${colorHeaderSelector};
    position: absolute;
    top: 7px;
    line-height: 20px;
    right: 10px;
  }
  
  #akkadu-interpretation-player .selectCustom-trigger:hover {
    box-shadow: 0 0 4px #e9e1f8;
    ${backgroundHoverHeaderSelector ? `background: ${backgroundHoverHeaderSelector};` : '' };
  }

  #akkadu-interpretation-player .selectCustom-options {
    position: absolute;
    top: ${optionsDistanceFromHeader};
    left: 0;
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: ${borderRadiusOptionSelector};
    background-color: #ffffff;
    box-shadow: 0 0 4px #e9e1f8;
    z-index: 1;
    padding:0px;
    display: none;
    cursor: pointer;
    box-shadow: 3px 6px 7px 4px #e3e3e3;
    overflow: hidden;
  }
  
  #akkadu-interpretation-player .selectCustom-options .selectCustom-option h3 {
    color: ${colorOptionSelector};
    ${ fontSizeOptionSelector ? `font-size: ${fontSizeOptionSelector};` : ''  }
  }
  
  #akkadu-interpretation-player .selectCustom.isActive .selectCustom-options {
    display: block;
    min-width: 260px;
  }
  
  #akkadu-interpretation-player .selectCustom-option {
    background-color: ${backgroundOptionSelector};
    position: relative;
    padding: 10px 15px;
    display: flex;
  }
  
  #akkadu-interpretation-player  .selectCustom-option:hover {
    background-color: ${backgroundHoverOptionSelector};
  }
  
  #akkadu-interpretation-player  .selectCustom-option:not(:last-of-type)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 5px;
    width: 95%;
    border-bottom: 1px solid #e0e7ef;
  }
  
  #akkadu-interpretation-player .refresh-button{
    margin-left: 50px;
  }

  #akkadu-interpretation-player button{
    background:#58C283;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
  #akkadu-interpretation-player button:hover{
    background: #56b77d;
  }

  #akkadu-interpretation-player button h3{
    padding: 0px 20px;
    color:white;
  }

  #akkadu-interpretation-player .selectWrapper{
    display: flex;
  }
  `
}

export default component