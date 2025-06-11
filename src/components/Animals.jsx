import React from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import '../index.css';


export default function Animals({
  animals,
  title,
  onDelete,
  onAdoptToggle,
  onEditImage,
  nopets,
}) {
  if (animals.length === 0) return <h2>{nopets}</h2>;
  console.log(animals)
  return (
    <div>
      <h2>{title}</h2>
      <ListGroup>
        {animals.map((animal) => (
          <ListGroup.Item key={animal.id}>
            <div>
              <div>
                <div>
                  <img
                    className="animal-img-large"
                    src={animal.imageUrl}
                    alt={animal.name}
                    width={300}
                  />
                </div>
                <Button
                  className="w-12"
                  size="sm"
                  variant="light"
                  onClick={() => onEditImage(animal)}
                >
                  Edit
                </Button>
              </div>
              <div>
                <div>
                  <strong>{animal.name}</strong>AKA: {animal.species}, LOCATION{" "}
                  {animal.age}
                </div>

                <div>
                  <div>
                    {animal.kidFriendly && "Kid Friendly"}
                    {!animal.kidFriendly && "Not Kid Friendly"}
                  </div>
                  <div>
                    {animal.vaccinated && "Vaccinated"}
                    {!animal.vaccinated && "Not Vaccinated"}
                  </div>
                </div>
                <div>
                  <Button size="sm" onClick={() => onAdoptToggle(animal)}>
                    {animal.adopted && "Return"}
                    {!animal.adopted && "Adopt"}
                  </Button>
                  <Button
                    onClick={() => onDelete(animal.id)}
                    variant="danger"
                    size="sm"
                  >
                    🗑️
                  </Button>
                </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}