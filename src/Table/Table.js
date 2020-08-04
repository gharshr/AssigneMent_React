import React from 'react';
import './Table.css'

function Table(props) {
    console.log(props.data)
    // console.log(ColumnNames);
    if(props.data !== null) {
        var columnNames = Object.keys(props.data[0]);
        console.log(columnNames);
        var tableHeaders = <thead>
            <tr>{columnNames.map((header,index) => 
                <th key={index}>{header}</th>
            )}</tr>
        </thead>
        var tableRows = <tbody>
            {
                props.data.map((entry,index) => 
                    <tr key={index}>
                        <td suppressContentEditableWarning={true} className={columnNames[0]} contentEditable="true" onKeyDown={(event) => updateOnEnter(props.data,props.updateData,event)}>{entry.name}</td>
                        <td suppressContentEditableWarning={true} className={columnNames[1]} contentEditable="true" onKeyDown={(event) => updateOnEnter(props.data,props.updateData,event)}>{entry.surname}</td>
                        <td suppressContentEditableWarning={true} className={columnNames[2]} contentEditable="true" onKeyDown={(event) => updateOnEnter(props.data,props.updateData,event)}>{entry.email}</td>
                    </tr>
                )
            }
        </tbody>
    }
    return (<table>{tableHeaders}{tableRows}</table>)
}

function updateOnEnter(data,updateData,e) {
    var rowIndex = e.nativeEvent.target.parentElement.rowIndex;
    var value = e.nativeEvent.target.innerText;
    var group = e.nativeEvent.target.className;
    if(e.which === 13) {
        // data[rowIndex - 1]
        e.preventDefault();
        e.target.blur();
        updateData(value,group,rowIndex);
    }
        
}

export default Table