import React from 'react';
import './gallery.css';
import { useNavigate } from 'react-router-dom';
import { tableMaker, empty } from '../tableMaker';

export function Gallery({ setColor }) {
    const [galleryData, setGalleryData] = React.useState([]);
    const navigate = useNavigate();
    const [galleryRows, setGalleryRows] = React.useState([]);

    React.useEffect(() => {
        const galleryText = localStorage.getItem('gallery');
        if (galleryText) {
            setGalleryData(JSON.parse(galleryText));
        }
    }, []);

    React.useEffect(() => {
        if (galleryData.length) {
            setGalleryRows(tableMaker(galleryData, 'gallery', navigate, setColor));
        } else {
            setGalleryRows(empty('Make a splash of color in the palette maker!'));
        }
      }, [galleryData]);

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