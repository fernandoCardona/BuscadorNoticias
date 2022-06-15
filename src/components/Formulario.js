import React from 'react';
import Styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ];

    //Inicializamos el hook useSelect para obtener el state y el componente SelectNoticias
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    //Submit al form pasamos la categoria a App.js
    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);    
    }


    return ( 
        <div className={`${Styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={Styles.heading}>Encuentra noticias por categorías</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit" className={`${Styles.btn_block}  btn-large amber darken-2`} value="Buscar"/>
                    </div>

                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
    
}
export default Formulario;