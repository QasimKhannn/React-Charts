const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState(null);

const handleFileChange = (event) => {
  setImage(event.target.files[0]);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  dispatch(addImage(formData)); // dispatch addImage action with formData as payload
};

