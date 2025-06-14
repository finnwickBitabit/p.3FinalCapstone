import { useEffect, useState } from "react";
import "./App.css";
import AnimalModal from "./components/AnimalModal";
import Button from "react-bootstrap/Button";
import {
  createAnimal,
  deleteAnimal,
  scanAnimals,
  toggleAdopted,
  updateAnimalImage,
} from "./dynamo";
import Animals from "./components/Animals";

function App() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    location: "",
    kidFriendly: false,
    vaccinated: false,
    imageUrl: "",
  });
  const [animals, setAnimals] = useState([]);
  const [show, setShow] = useState(false);
  //CONTROLS MODAL VISIBILITY

  useEffect(() => {
    scanAnimals().then(setAnimals);
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function handleToggle(animal) {
    await toggleAdopted(animal.id, !animal.adopted);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, adopted: !a.adopted } : a))
    );
  }

  async function handleDelete(id) {
    await deleteAnimal(id);
    setAnimals((prev) => prev.filter((animal) => animal.id !== id));
  }

  async function handleEditImage(animal) {
    const url = window.prompt("Enter new image URL", animal.imageUrl);
    if (!url) return;
    await updateAnimalImage(animal.id, url);
    setAnimals((prev) =>
      prev.map((a) => (a.id === animal.id ? { ...a, imageUrl: url } : a))
    );
  }

  async function handleAdd() {
    if (!form.name || !form.species || !form.location) return;
    const item = {
      id: crypto.randomUUID(),
      name: form.name,
      species: form.species,
      kidFriendly: form.kidFriendly,
      vaccinated: form.vaccinated,
      location: form.location,
      adopted: false,
      imageUrl:
        form.imageUrl ||
        "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-139677758-scaled.jpg?resize=2048",
    };

    await createAnimal(item);
    setAnimals((prev) => [...prev, item]);
    setShow(false);
  }

  const available = animals.filter((animal) => !animal.adopted);
  const adopted = animals.filter((animal) => animal.adopted);

  return (
    <>
      <h1>Pawsome Pawtastic</h1>
      <main className="mt-20 flex flex-column text-center">
        <Button className="m-auto" variant="info" onClick={() => setShow(true)}>
          Add Animal
        </Button>

        <AnimalModal
          show={show}
          onHide={() => setShow(false)}
          form={form}
          onChange={handleChange}
          onSave={handleAdd}
        />

        <Animals
          onAdoptToggle={handleToggle}
          animals={available}
          title="Choose your builds"
          nopets="No builds available"
          onDelete={handleDelete}
          onEditImage={handleEditImage}
        />
        <Animals
          onAdoptToggle={handleToggle}
          animals={adopted}
          title=""
          nopets="Create you pet"
          onDelete={handleDelete}
          onEditImage={handleEditImage}
        />
      </main>
    </>
  );
}

export default App;
