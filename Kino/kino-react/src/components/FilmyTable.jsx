import React from "react";
import { Link } from "react-router-dom";


const FilmyTable = ( props ) => {

    const { items, onDelete, onSort, sortIcon } = props;

    return (
        <table className="table">
            <thead>
            <tr>
                <th className="clicakble" onClick={() => onSort('title')} scope="col">Tytuł Filmu {sortIcon('title')}</th>
                <th scope="col">Plakat</th>
                <th className="clicakble" onClick={() => onSort('text')} scope="col">Opis Filmu {sortIcon('text')}</th>
                <th scope="col">Ocena</th>
                <th scope="col"></th>
                
                
            </tr>
            </thead>
            <tbody>
            {items.map((item, key) =>
                (
                    
                    <tr key={key}  >
                        <td>{item.title}</td>
                        <td><img style={{width: '150px', height: '250px'}} src={item.image} alt={key}/></td>
                        <td>{item.text}</td>
                        <td>{item.mark}/10</td>
                        <td>
                            {/* <button onClick={() => onDelete(item)} className="btn btn-dark">Przejdz do filmu</button> */}
                            <Link to={"/details/" + item.id}  className="btn btn-primary">Przedjdz do Filmu</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};



export default FilmyTable;