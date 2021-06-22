

const component = {
  html:`
  <body>
    <div id="wrapper-interpretation-manager">
      <div class="interpretation-manager-row">
        <div class="interpretation-manager-column">
          <h2>Interpretation </h2>
          <div class="interpretation-manager-event-languages">
            <h3>Event Languages </h3> 
            <div class="select">
              <div class="selectWrapper" >
                <div class="selectCustom js-selectCustom">
                  <div id="interpretation-manager-custom-value" class="selectCustom-trigger">  <img src=''/> <h3>test1 </h3> </div>
                  <div id="interpretation-manager-options" class="selectCustom-options">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  `,
  css:`

  #wrapper-interpretation-manager{
    background-color: #F7FAFD;
    font-family: "Helvetica Neue", Arial, sans-serif;
  }
  #wrapper-interpretation-manager h1,
  #wrapper-interpretation-manager h2, 
  #wrapper-interpretation-manager h3, 
  #wrapper-interpretation-manager p{
    color: black;
    margin:0px;
    padding:0px;
  }
  #wrapper-interpretation-manager h1{
  
  }
  #wrapper-interpretation-manager h2{
    font-size: 19px;
    padding:1rem 0rem;
  
  }
  #wrapper-interpretation-manager h3{
    font-size: 16px;
    color: #2C3D4F;
    padding:0rem 0rem;
  }
  
  #wrapper-interpretation-manager p{
  
  }
  #wrapper-interpretation-manager img{
      margin:0px;
      padding:0px;
      max-width: 20px;
      margin-right:10px;
  }
  #wrapper-interpretation-manager button{
      background:#58C283;
      border-radius: 20px;
      border: none;
      cursor: pointer;
  }
  #wrapper-interpretation-manager button:hover{
    background: #56b77d;
  }
  #wrapper-interpretation-manager button h3{
      padding: 0px 20px;
      color:white;
  }
  .interpretation-manager-event-languages{
    display:flex;
  }
  
  
  #interpretation-manager-options{
    max-height: 175px;
    overflow-y: scroll;
  }

  
  #wrapper-interpretation-manager .select {
      position: relative;
    }
    #wrapper-interpretation-manager .selectLabel {
      display: block;
      margin-bottom: 10px;
    }
    #wrapper-interpretation-manager .selectWrapper {
      position: relative;
    }
    #wrapper-interpretation-manager  .selectCustom {
      position: relative;
      height: 100%;
    }
    #wrapper-interpretation-manager .selectCustom-trigger {
      display: flex;
      position: relative;
      min-width: 150px;
      background-color: white;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      cursor: pointer;
      padding: 10px 15px;
      width: 100%;
      height: 100%;
    }
    #wrapper-interpretation-manager  h3, #wrapper-interpretation-manager .selectCustom-trigger{
      font-weight: 400;
    }
    #wrapper-interpretation-manager .selectCustom-trigger::after {
      content: "▾";
      color:#908f8f;
      position: absolute;
      top: 7px;
      line-height: 20px;
      right: 10px;
    }
    
    #wrapper-interpretation-manager .selectCustom-trigger:hover {
      box-shadow: 0 0 4px #e9e1f8;
    }
    #wrapper-interpretation-manager .selectCustom-options {
      position: absolute;
      top: 45px;
      left: 0;
      width: 100%;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 4px #e9e1f8;
      z-index: 1;
      padding:0px;
      display: none;
      cursor: pointer;
      box-shadow: 3px 6px 7px 4px #e3e3e3;
    }
    
    #wrapper-interpretation-manager .selectCustom.isActive .selectCustom-options {
      display: block;
      min-width: 260px;
    }
    
    #wrapper-interpretation-manager .selectCustom-option {
      position: relative;
      padding: 10px 15px;
      display: flex;
    }
    
    #wrapper-interpretation-manager  .selectCustom-option:hover {
      background-color: #F2F2F2;
    }
    
    #wrapper-interpretation-manager  .selectCustom-option:not(:last-of-type)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5px;
      width: 95%;
      border-bottom: 1px solid #e0e7ef;
    }
    
  
    #wrapper-interpretation-manager .selectWrapper{ 
      display: flex;
    }
  
  `
}

export default component