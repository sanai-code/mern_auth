import { useContext, useState } from "react";
import axios from "axios";
import { ContextComp } from "../context/ContextApi";
export let Contact = () => {
  let { getInfo } = useContext(ContextComp);
  let [name,setName] = useState("")
  async function getingInfo(){
    let usename = await getInfo();
    setName(usename)
  }
  console.log('kaha hai be',name)
  let [value, setVal] = useState({
    username: getInfo,
    email: name,
    phone: "",
    message: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(value);
    let response = await axios.post(
      `${process.env.BACKEND_URL}/contact/contact`,
      value
    );
  }
  function handleChange(e) {
    let name = e.target.name;
    let targetVal = e.target.value;
    setVal({ ...value, [name]: targetVal });
  }
  console.log(value);
  return (
    <div className="w-full h-dvh">
      <div
        id="wrapper"
        className="h-full w-full p-5 bg-amber-200 grid place-items-center"
      >
        <form
          className="w-full h-full flex flex-col items-center text-center gap-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter Your Name"
            value={value.username}
            required
            autoComplete="off"
            className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
            autoComplete="off"
            className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            required
            placeholder="Enter Your Phone"
            className="w-full text-center py-5 text-2xl text font-bold border-b-2 outline-none"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Subject"
            className="w-full text-center py-2 text-2xl text font-bold border-b-2 outline-none"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <button
            type="submit"
            className="w-full text-center text-2xl border-2 border-black rounded-full py-3 bg-blue-400 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
