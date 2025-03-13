import React from 'react';
import "./inspire.css";
import { useNavigate } from 'react-router-dom';
import { randomizeColor, savePalette } from '../utilities';
import { empty, tableMaker } from '../tableMaker';

export function Inspire({color, setColor}) {
    const [inspireData, setInspireData] = React.useState([]);
    const [inspireRows, setInspireRows] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setColor((color) => ({
                ...color,
                colorOne: randomizeColor(),
                colorTwo: randomizeColor(),
                colorThree: randomizeColor(),
                colorFour: randomizeColor(),
            }));

            const names = ['tomBrady', 'chuckNorris', 'bruceWayne'];
            const randomName = names[Math.floor(Math.random() * names.length)];
            savePalette(`Palette ${randomName}`, color, 'inspire', randomName);
        }, 7000);

        fetch('/api/palettes/inspirePalettes')
        .then((response) => response.json())
        .then((palettes) => {
            setInspireData(palettes);
        });       

        return () => clearInterval(intervalId);
    }, [color]);

    React.useEffect(() => {
        if (inspireData.length) {
            setInspireRows(tableMaker(inspireData, 'inspire', navigate, setColor));
        } else {
            setInspireRows(empty('Where could the artists be?')); 
        }
      }, [inspireData]);

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
                {inspireRows}
            </tbody>                
        </table>
    </main>
  );
}