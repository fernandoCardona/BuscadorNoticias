import React from 'react';



const Formulario = () => {
    return ( 
        <div className="col s12 m8 offset-m2">
            <form>
                <h2>Encuentra noticias por categorías</h2>
              
                <div className="input-field col s12">
                    <input type="submit" className="btn-large amber darken-2" value="Buscar"/>
                </div>

            </form>
        </div>
     );
}
 
export default Formulario;