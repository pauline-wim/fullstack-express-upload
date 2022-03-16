import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  // const [userList, setUserList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fileField = useRef();

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json(res))
  //     .then((res) => {
  //       console.log(res);
  //       setUserList(res);
  //     });
  // }, []);

  const onSubmit = (data) => {
    setUsername(data.username);
    // console.log(data.username);
    const formData = new FormData();
    formData.append("img", fileField.current.files[0]);
    formData.append("username", data.username);
    console.log(fileField.current.files[0].name);
    setImage(fileField.current.files[0].name);
    fetch("/user", {
      method: "POST",
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
        <input {...register("img")} type="file" ref={fileField} />
        <input className="btn" type="submit" value="Send" />
      </form>
      {/* {userList ? <div>{userList}</div> : null} */}
      {/* {image ? <img src={`${image}`} alt="image" /> : null} */}
    </main>
  );
}

export default App;
