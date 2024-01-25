// Import React from the react library
import React from "react";
import Event from './Event'

// Create a React functional component
const Calendar = () => { // Corrected the function declaration syntax

    // Between the curly braces, write a return statement followed by a pair of parentheses
    return (
        // Create a div with className="Calendar"
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
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
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' location='Maple & Ash' color='green'/>
                        <td></td> {/* Monday */}
                        <Event event='Starbucks ☕️' location='Grand Station' color ='pink'/>
                        <Event event='Starbucks ☕️' location='Grand Station' color ='pink'/>
                        <Event event='Starbucks ☕️' location='Grand Station' color ='pink'/>
                        <Event event='Starbucks ☕️' location='Grand Station' color ='pink'/>
                        <Event event='Starbucks ☕️' location='Grand Station' color ='pink'/>
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">9 am</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">10 am</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">11 am</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">12 pm</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <Event event='Subway 🚊' location='Rooselvet Station' color ='blue'/>
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">1 pm</td>
                        <td></td> {/* Sunday */}
                        <Event event='Yolk 🍳' location='355 E Ohio St' color ='green'/>
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">2 pm</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">3 pm</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">4 pm</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <td></td> {/* Friday */}
                        <td></td> {/* Saturday */}
                    </tr>
                    <tr>
                        {/* Corrected the table cells to match the table headers */}
                        <td className="time">5 pm</td>
                        <td></td> {/* Sunday */}
                        <td></td> {/* Monday */}
                        <td></td> {/* Tuesday */}
                        <td></td> {/* Wednesday */}
                        <td></td> {/* Thursday */}
                        <Event event='The Bean 🫘' location='Millennium Park' color ='blue'/>
                        <td></td> {/* Saturday */}
                    </tr>
                    {/* Additional rows can be added here for other time slots */}
                </tbody>
            </table>
        </div>
    );

}

// At the end of the file, export the component
export default Calendar;
