import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = new FormData();
  // const fileField = document.querySelector('input[type="file"]');

  // formData.append("img", fileField.files[0]);

  const onSubmit = (data) => {
    console.log(data.img[0].name);
    setImage(data.img[0].name);
    fetch("http://localhost:8000/user", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    });
  };

  return (
    <main>
      <h1>WELCOME</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Username"
          {...register("username", { required: true })}
        />
        <input {...register("img")} type="file" />
        <input className="btn" type="submit" value="Send" />
      </form>
      {/* {image ? <img src={image} alt="image" /> : null} */}
    </main>
  );
}

export default App;
