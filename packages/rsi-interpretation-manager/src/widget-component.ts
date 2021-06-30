

const component = {
  html:`
  <body>
    <div id="wrapper-int-manager">
     <h1 class="title tx-left ">Interpretation </h1>
      <div class="int-manager-row">
        <div class="int-manager-column tx-left">
          <div class="int-manager-event-languages">
            <h3>Event Languages </h3> 
            <div id="int-manager-event-language-selector"> </div>
          </div>
          <div id="int-manager-interpretation-wrapper">  
            <h2 class="tx-left">Interpretation Languages: </h2> 
            <div id="int-manager-row-language">
              <div id="int-manager-interpretation-language-selector" class="undisplay"> </div>
              <button id="int-manager-add-language" class="button-add-language">Add Language + </button>
            </div>
          </div>
      </div>
      <div class="int-manager-column tx-left">
        <h2> Manage Interpreters </h2>
        <form name="int-form-radio">
          <div class="wrapper-radio">
            <input type="radio" id="need-interpreter" name="int-interpreter-radio" class="radio" value="CSS" checked="checked">
            <label for="need-interpreter"> I don't have interpreters. Help me book some </label>
          </div>
            <p class="extra-small"> <span class="green"> Interpreters booked and ready ! </span> <span class="blue" id="manage-interpreter"> <u> Manage</u> </span> </p> 
          <div class="wrapper-radio">
            <input type="radio" id="own-interpreter" name="int-interpreter-radio" class="radio" value="CSS">
            <label for="own-interpreter"> I have my own interpreters</label>
          </div>
        </form>
        <div id="int-wrapper-email-box">
        </div>
        <p class="extra-small blue" id="int-add-interpreter"> <u > Add Interpreter</u> </p>
         <div class="button-done"> <button id="int-manager-validate"> Done </button>  </div>
         <p class="extra-small" id="int-manager-feedback"> </p>
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
    /* padding: 0rem 2rem; */
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
    padding: 1rem 2rem;
    column-gap: 2rem; 
  }
  #int-manager-options{
    max-height: 175px;
    overflow-y: scroll;
  }

  .tx-left{
    text-align:left !important;
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
    .wrapper-radio{
      display:flex;
    }
    #wrapper-int-manager p, #wrapper-int-manager input{
      margin-bottom: 1rem ;
    }
    #wrapper-int-manager .email-box, #wrapper-int-manager .extra-small{
      margin-left:2rem;
    }
    .email-box{
      margin-left:1.5 rem;
    }
    #wrapper-int-manager .radio{
      margin-right:0.5rem;
    }
    .extra-small{
      font-size: 13px;
    }
    #wrapper-int-manager  .blue{
      color:#2D72FE;
    }
    #wrapper-int-manager  .green{
      color:#51b581;
    }
    #wrapper-int-manager .email-box {
      padding: 5px 5px;
      border-radius: 5px;
      border: 1px solid;
      border-color: #c8c8c8;
      width: 200px;
    }
    #wrapper-int-manager u {
      cursor:pointer;
    }
    .button-done{
      text-align:right;
    }
    .button-done button{
      width: 100px;
    }
    #wrapper-int-manager .delete-button{
      cursor:pointer;
      padding-left:1rem;
      color: #b8b8b8;
    }
    #wrapper-int-manager #int-manager-feedback{
      padding-top:1rem;
      color:#f28282;
    }
  `
}

export default component