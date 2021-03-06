import React from 'react';
import Card from "./Card";

function CardList(props){
    return(
        <div className="row">
            <Card charName="gary_goodspeed" name="Gary Goodspeed" status="Alive"/>
            <Card charName="mooncake" name="Mooncake" status="Alive"/>
            <Card charName="quinn_ergon" name="Quinn Ergon" status="Alive"/>
            <Card charName="little_cato" name="Little Cato" status="Alive"/>
            <Card charName="avocato" name="Avocato" status="Alive"/>
            <Card charName="kvn" name="K.V.N" status="Operational"/>
            <Card charName="ash_graven" name="Ash Graven" status="Alive"/>
        </div>
    )
}

export default CardList;