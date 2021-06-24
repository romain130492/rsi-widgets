

const component = {
  html:`
  <body>
    <div id="wrapper-int-manager">
     <h1 class="title">Interpretation </h1>
      <div class="int-manager-row">
        <div class="int-manager-column">
          <div class="int-manager-event-languages">
            <h3>Event Languages </h3> 
            <div id="int-manager-event-language-selector"> </div>
          </div>
          <div id="int-manager-interpretation-wrapper">  
            <h2>Interpretation Languages: </h2> 
            <div id="int-manager-row-language">
              <div id="int-manager-interpretation-language-selector" class="undisplay"> </div>
              <button id="int-manager-add-language" class="button-add-language">Add Language + </button>
            </div>
          </div>
      </div>
      <div class="int-manager-column">
      <h2> Manage Interpreters </h2>
      </div>
    </div>
  </body>
  `,
  css:`

  #wrapper-int-manager{
    box-shadow: 3px 6px 7px 4px #e3e3e3;
    background-color: #F7FAFD;
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: 75%;
    padding: 1rem 2rem 2rem 1rem;
    margin: auto;
    border-radius: 10px;
  }
  #wrapper-int-manager h1,
  #wrapper-int-manager h2, 
  #wrapper-int-manager h3, 
  #wrapper-int-manager p{
    color: black;
    margin:0px;
    padding:0px;
  }
  #wrapper-int-manager h1{
    font-size:24px;
    padding:1rem 0rem;
  
  }
  #wrapper-int-manager h2{
    font-size: 19px;
    padding:0rem 0rem 1rem 0rem;
  }

  #wrapper-int-manager h3{
    font-size: 16px;
    color: #2C3D4F;
    padding:0rem 0rem;
  }
  #wrapper-int-manager button{
    padding: 0.8rem 1rem;
    color: white;
  }
  #wrapper-int-manager .button-add-language{
    background: #2D72FE;
    margin:0rem 1rem 1rem 0rem;
  }
  #wrapper-int-manager p{
  
  }
  #wrapper-int-manager .title{
    padding: 1rem 1rem 1.5rem 2rem;
  }
  .int-manager-column{
    flex: 1 0 50%;
    white-space: nowrap;
    padding: 0rem 2rem;
  }
  .int-manager-column:nth-child(1){
    border-right:1px solid #D8E0E8;
  }

  #wrapper-int-manager img{
      margin:0px;
      padding:0px;
      max-width: 20px;
      margin-right:10px;
  }
  #wrapper-int-manager button{
      background:#58C283;
      border-radius: 20px;
      border: none;
      cursor: pointer;
  }
  #wrapper-int-manager button:hover{
    background: #56b77d;
  }
  #wrapper-int-manager button h3{
      padding: 0px 20px;
      color:white;
  }
  .int-manager-event-languages{
    display: table;
    padding-bottom:1.5rem;
  }
  .int-manager-event-languages h3{
    display: table-cell;
    vertical-align: middle;
    padding-right: 2rem !important;
  }

  .int-manager-row{
    display:flex;
  }
  #int-manager-options{
    max-height: 175px;
    overflow-y: scroll;
  }

  
  #wrapper-int-manager .select {
      position: relative;
    }
    #wrapper-int-manager .selectLabel {
      display: block;
      margin-bottom: 10px;
    }
    #wrapper-int-manager .selectWrapper {
      position: relative;
    }
    #wrapper-int-manager  .selectCustom {
      position: relative;
      height: 100%;
    }
    #wrapper-int-manager .selectCustom-trigger {
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
    #wrapper-int-manager  h3, #wrapper-int-manager .selectCustom-trigger{
      font-weight: 400;
    }
    #wrapper-int-manager .selectCustom-trigger::after {
      content: "▾";
      color:#908f8f;
      position: absolute;
      top: 7px;
      line-height: 20px;
      right: 10px;
    }
    
    #wrapper-int-manager .selectCustom-trigger:hover {
      box-shadow: 0 0 4px #e9e1f8;
    }
    #wrapper-int-manager .selectCustom-options {
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
    
    #wrapper-int-manager .selectCustom.isActive .selectCustom-options {
      display: block;
      min-width: 260px;
    }
    
    #wrapper-int-manager .selectCustom-option {
      position: relative;
      padding: 10px 15px;
      display: flex;
    }
    
    #wrapper-int-manager  .selectCustom-option:hover {
      background-color: #F2F2F2;
    }
    
    #wrapper-int-manager  .selectCustom-option:not(:last-of-type)::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5px;
      width: 95%;
      border-bottom: 1px solid #e0e7ef;
    }
    
  
    #wrapper-int-manager .selectWrapper{ 
      display: flex;
    }
    #int-manager-interpretation-wrapper .undisplay{
      display:none;
    }
    #int-manager-row-language{
      display: flex;
      flex-wrap: wrap;
    }
    #int-manager-row-language .int-manager-label-language{
      position: relative;
      padding: 10px 15px;
      display: flex;
      box-shadow: 2px 4px 9px 1px #e3e3e3;
      background: white;
      border-radius: 5px;
      margin:0rem 1rem 1rem 0rem;
      
    }
    .js-selectCustom-interpretation-language{
      margin-right:2rem;
      min-width: 100px !important;
    }
    #int-manager-row-language .cross{
      padding-left:0.5rem;
      cursor:pointer;
      color:#949494;
    }
    
  `
}

export default component