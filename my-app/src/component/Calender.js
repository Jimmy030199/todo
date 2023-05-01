import React from 'react'

function Calender() {
  return
  ;<>
    <div id="calender-wrapper">
      <div id="calender-title" class="disable-select flex row center-v around">
        <div id="left" class="flex row center-vh">
          <span>"小於"</span>
        </div>
        <p class="flex row center-vh"></p>
        <div id="right" class="flex row center-vh">
          <span>"大於"</span>
        </div>
      </div>
      <div id="days" class="flex row center-vh colorRed disable-select">
        <p>MON</p>
        <p>TUE</p>
        <p>WEDS</p>
        <p>THURS</p>
        <p>FRI</p>
        <p>SAT</p>
        <p>SUN</p>
      </div>
      <div id="calender-content" class="flex row wrap disable-select"></div>
      <div id="calender-panel" class="flex row center-v end">
        <div id="info" class="flex column center-vh bgColorDarkRed">
          <div id="info-titles" class="flex row center-vh">
            <p class="flex column center-vh">Start Date</p>
            <p class="flex column center-vh">End Date</p>
          </div>
          <div class="flex row center-vh bgColorRed">
            <p class="flex column center-vh" id="startdate"></p>
            <p class="flex column center-vh" id="enddate"></p>
          </div>
        </div>
        <div id="clear" class="flex column center-vh bgColorDarkRed">
          <p>CLEAR SELECTION</p>
        </div>
      </div>
    </div>

    <div id="calender-buttons" class="flex row center-vh wrap">
      <div id="make-booking" class="flex column center-vh width-half">
        <p>MARK AVAILABLE</p>
      </div>
      <div id="remove-booking" class="flex column center-vh width-half">
        <p>MARK UNAVAILABLE</p>
      </div>
    </div>
  </>
}

export default Calender
