import Joi from 'joi';

const cortesSchema = Joi.object( {
    lugar: Joi.string().required().label('Lugar'),
    tamano: Joi.string().required().label('Tamaño'),
    hora: Joi.number().required().label('Hora'),
    dia: Joi.number().required().label('Dia')
});

export default cortesSchema;