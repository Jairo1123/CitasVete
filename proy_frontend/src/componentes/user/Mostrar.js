
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import clientAxios from '../config/axios';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function listarDatos(lugar, tamano, hora, dia) {
  return {lugar, tamano, hora, dia};
}

const rows = [
  listarDatos('Casa', "largo", "1:00", "Martes"),
  listarDatos('Local', "largo", "2:00", "Lunes"),
];

const Mostrar = () => {


    return (
      <div>
        <h1>Lista de Citas Registradas</h1>
        Cortes
      <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lugar</TableCell>
              <TableCell>Tamaño</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell>Dia</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row)=>(
              <TableRow>
                <TableCell>{row.lugar}</TableCell>
                <TableCell>{row.tamano}</TableCell>
                <TableCell>{row.hora}</TableCell>
                <TableCell>{row.dia}</TableCell>
              </TableRow>
            ))}
          </TableBody>
      </Table>             
        </div>
    )
}

export default Mostrar
