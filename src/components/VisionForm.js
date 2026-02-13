import { useState } from "react";

function VisionForm({ addVision }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !image) return alert("Fill required fields");

    addVision({
      id: Date.now(),
      title,
      date,
      desc,
      image
    });

    setTitle("");
    setDate("");
    setDesc("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="glass p-4">
      <h4>Add New Goal 🎯</h4>

      <input
        className="form-control mb-2"
        placeholder="Goal Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="date"
        className="form-control mb-2"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />

      <input
        type="file"
        className="form-control mb-3"
        onChange={handleImage}
      />

      <button className="btn btn-primary w-100">Add Vision</button>
    </form>
  );
}

export default VisionForm;
