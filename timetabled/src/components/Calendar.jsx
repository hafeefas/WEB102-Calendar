import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th> </th> {/* Empty header for time column */}
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* Each row must have 8 columns (1 for time + 7 for days) */}
          <tr>
            <td className="time">8am</td>
            <Event event='Starbucks ☕️' color ='green'  location='Maple & Ash'/>
            <td></td>
            <td></td>
            <Event event='River Cruise' color ='blue'  location='The Ocean'/>            <td></td>
            <td></td>
            <Event event='Cafe Time' color ='pink' location='Maple & Ash'/>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <td></td> <Event event='River Cruise' color ='blue' location='The Ocean'/> <td></td> <td></td> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td></td> <td></td> <Event event='River Cruise' color ='blue'  location='The Ocean'/> <td></td> <td></td> <td></td> <Event event='Yolk Time' color ='yellow'  location='Maple & Ash'/>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td></td> <td></td> <Event event='Yolk Time' color ='yellow'  location='Maple & Ash'/> <td></td> <Event event='Party Time' color ='pink'  location='Maple & Ash'/> <td></td> <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td></td> <td></td> <Event event='Yolk Time' color ='yellow' location='Maple & Ash'/> <td></td> <Event event='Cafe Time' color ='pink' location='Maple & Ash'/> <td></td> <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td></td> <td></td> <td></td> <td></td> <td></td> <Event event='Party Time' color ='pink' location='Maple & Ash'/> <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <Event event='Cubs Gaming' color ='blue' location='Maple & Ash'/> <td></td> <Event event='Subway Time' color ='yellow' location='Maple & Ash'/> <td></td> <td></td> <td></td> <Event event='Fancy Dinner' color ='green' location='Maple & Ash'/>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td></td> <td></td> <td></td> <Event event='Party Time' color ='pink'/> <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td></td> <td></td> <td></td> <Event event='Fancy Dinner' color ='green'/> <td></td> <td></td> <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
