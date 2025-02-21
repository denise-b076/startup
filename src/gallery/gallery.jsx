import React from 'react';
import Button from 'react-bootstrap/Button';
import './gallery.css';

export function Gallery() {
    const [palettes, setPalettes] = React.useState([]);

    React.useEffect(() => {
        const galleryText = localStorage.getItem('gallery');
        if (galleryText) {
            setPalettes(JSON.parse(galleryText));
        }
    }, []);

    const galleryRows = [];
    if (palettes.length) {
        for (const [i, palette] of palettes.entries()) {
            galleryRows.push(
                <tr key={i}>
                    <td><Button id="gallery_button" variant="link" href="/palette_maker">{palette.name}</Button></td>
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