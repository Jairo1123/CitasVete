import Joi from 'joi';

const mostrarSchema = Joi.object( {
    direccion: Joi.string().required().label('Direccion'),
    hora: Joi.string().required().label('Hora'),
    mascota: Joi.string().required().label('Mascota'),
    fecha: Joi.string().required().label('Fecha')
});

export default mostrarSchema;