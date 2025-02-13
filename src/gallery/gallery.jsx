import React from 'react';
import Button from 'react-bootstrap/Button';
import './gallery.css';

export function Gallery() {
  return (
    <main className="container-fluid text-center">
        <table id="gallery_table" className="table table-striped-columns">
            <thead className="table-dark">
                <tr>
                    <th><b>Palette Name</b></th>
                    <th><b>Colors</b></th>
                    <th><b>Date Created</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button id="gallery_button" variant="link" href="/palette_maker">"Clown Culture"</Button></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_one" className="gallery_color"></div>                        
                            <div id="color_two" className="gallery_color"></div>                       
                            <div id="color_three" className="gallery_color"></div>                       
                            <div id="color_four" className="gallery_color"></div>
                        </div>                        
                    </td>
                    <td>1/25/25</td>
                </tr>
                <tr>
                    <td><Button id="gallery_button" variant="link" href="/palette_maker">"Emerald City"</Button></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_five" className="gallery_color"></div>                        
                            <div id="color_six" className="gallery_color"></div>                       
                            <div id="color_seven" className="gallery_color"></div>                       
                            <div id="color_eight" className="gallery_color"></div>
                        </div>                        
                    </td>
                    <td>12/25/24</td>
                </tr>
                <tr>
                    <td><Button id="gallery_button" variant="link" href="/palette_maker">"Bluesky"</Button></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div id="color_nine" className="gallery_color"></div>                        
                            <div id="color_ten" className="gallery_color"></div>                       
                            <div id="color_eleven" className="gallery_color"></div>                       
                            <div id="color_twelve" className="gallery_color"></div>
                        </div>                        
                    </td>
                    <td>11/12/24</td>
                </tr>
            </tbody>
        </table>
    </main>
  );
}