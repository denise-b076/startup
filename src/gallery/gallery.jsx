import React from 'react';
import Button from 'react-bootstrap/Button';
import './gallery.css';
import { useNavigate } from 'react-router-dom';

export function Gallery({ setColor }) {
    const [palettes, setPalettes] = React.useState([]);
    const navigate = useNavigate();
    const galleryRows = [];

    React.useEffect(() => {
        const galleryText = localStorage.getItem('gallery');
        if (galleryText) {
            setPalettes(JSON.parse(galleryText));
        }
    }, []);

    if (palettes.length) {
        for (const [i, palette] of palettes.entries()) {
            galleryRows.push(
                <tr key={i}>
                    <td><Button id="gallery_button" variant='link'
                    onClick={() => {
                    navigate('/palette_maker')
                    setColor(() => ({colorOne: palette.first, colorTwo: palette.second, colorThree: palette.third, colorFour: palette.fourth, fromTable: true}));
                    localStorage.setItem('colorOne', palette.first);
                    localStorage.setItem('colorTwo', palette.second);
                    localStorage.setItem('colorThree', palette.third);
                    localStorage.setItem('colorFour', palette.fourth);
                }
            }
                >{palette.name}</Button></td>
                    <td className="color_data">
                        <div className="color_palette">
                            <div style={{ backgroundColor: palette.first }} className="gallery_color"></div>                        
                            <div style={{ backgroundColor: palette.second }} className="gallery_color"></div>                       
                            <div style={{ backgroundColor: palette.third }} className="gallery_color"></div>                       
                            <div style={{ backgroundColor: palette.fourth }} className="gallery_color"></div>
                        </div>                        
                    </td>
                    <td>{palette.date}</td>
                </tr>
            );
        }
    }
    else {
        galleryRows.push(
            <tr key='0'>
                <td colSpan='4'>Make a splash of color in the palette maker!</td>
            </tr>
        );
    }

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
            <tbody id='palettes'>
                {galleryRows}
            </tbody>
        </table>
    </main>
  );
}