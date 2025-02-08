import React from 'react';
import "./inspire.css";

export function Inspire() {
  return (
    <main className="container-fluid text-center">
        <table id="inspire_table" className="table table-striped-columns">
            <thead className="table-dark">
            <tr>
                <th><b>User</b></th>
                <th><b>Palette Name</b></th>
                <th><b>Colors</b></th>
                <th><b>Date Created</b></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tom</td>
                    <td><a href="palette_maker.html">"Game Day"</a></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_one" className="inspire_color"></div>                        
                            <div id="color_two" className="inspire_color"></div>                       
                            <div id="color_three" className="inspire_color"></div>                       
                            <div id="color_four" className="inspire_color"></div>
                        </div>                        
                    </td>
                    <td>1/22/25</td>
                </tr>
                <tr>
                    <td>Brady</td>
                    <td><a href="palette_maker.html">"Football"</a></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_five" className="inspire_color"></div>                        
                            <div id="color_six" className="inspire_color"></div>                       
                            <div id="color_seven" className="inspire_color"></div>                       
                            <div id="color_eight" className="inspire_color"></div>
                        </div>                        
                    </td>
                    <td>1/20/25</td>
                </tr>
                <tr>
                    <td>Bruce</td>
                    <td><a href="palette_maker.html">"Gotham Nights"</a></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_nine" className="inspire_color"></div>                        
                            <div id="color_ten" className="inspire_color"></div>                       
                            <div id="color_eleven" className="inspire_color"></div>                       
                            <div id="color_twelve" className="inspire_color"></div>
                        </div>                        
                    </td>
                    <td>1/18/25</td>
                </tr>
                <tr>
                    <td>Wayne</td>
                    <td><a href="palette_maker.html">"Batcave"</a></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_thirteen" className="inspire_color"></div>                        
                            <div id="color_fourteen" className="inspire_color"></div>                       
                            <div id="color_fifteen" className="inspire_color"></div>                       
                            <div id="color_sixteen" className="inspire_color"></div>
                        </div>                        
                    </td>
                    <td>1/6/25</td>
                </tr>
            </tbody>                
        </table>
    </main>
  );
}