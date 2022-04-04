import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/Inicio',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cortes',
    path: '/cortes',
    icon: <IoIcons.IoIosCut />,
    cName: 'nav-text'
  },
  {
    title: 'Baños',
    path: '/bano',
    icon: <FaIcons.FaCreativeCommonsBy />,
    cName: 'nav-text'
  },
  {
    title: 'Listado de Citas',
    path: '/mostrar',
    icon: <FaIcons.FaPaw />,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/',
    icon: <IoIcons.IoMdPower />,
    cName: 'nav-text'
  },
 
];