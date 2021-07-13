

const component = {
  html: ({
    widgetWrapperClass,
    dropdownWrapperClass,
    headerClass,
    optionsWrapperClass,
    selectedOptionClass,
    refreshButtonClass
  }) => `
  <body>
      <div class="select ${widgetWrapperClass || ''}">
        <div class="selectWrapper ${dropdownWrapperClass || ''}">
          <div class="selectCustom js-selectCustom ${headerClass || ''}">
            <div id="interpretation-player-custom-value" class="selectCustom-trigger ${selectedOptionClass || ''}">  <img src=''/> <span> </span> </div>
            <div id="interpretation-player-options" class="selectCustom-options ${optionsWrapperClass || ''}">
          </div>
        </div>
        <button id="interpretation-player-refresh" class="refresh-button ${refreshButtonClass || ''}" style="display:none;"> <span> Refresh </span> </button>
      </div>
  </body>
  `
}

export default component