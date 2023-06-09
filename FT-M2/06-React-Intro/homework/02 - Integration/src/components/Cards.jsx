import Card from './Card';

export default function Cards(props) {
   const { characters, onClose} = props;
  
   return (
      <div>
         {characters.map((character, index)=>(
            <Card
               key={index}
               onClose={ onClose}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
            >
            </Card>
         ))}
      </div>
   );
};
