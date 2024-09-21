import { useState } from "react";

const MessageForm = () => {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    City: "",
    Address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="flex flex-col space-y-5">
        <label htmlFor="label">
          <p>სახელი</p>
          <input
            className="p-5 border-[1px] border-primary rounded-md text-secondary outline-none"
            type="text"
            name="FirstName"
            value={form.FirstName}
            onChange={handleChange}
            placeholder="თქვენი სახელი *"
            required
          />
        </label>
        <input
          type="text"
          name="LastName"
          value={form.LastName}
          onChange={handleChange}
          placeholder="თქვენი გვარი *"
          required
        />
        <input
          type="text"
          name="Phone"
          value={form.Phone}
          onChange={handleChange}
          placeholder="ტელეფონის ნომერი *"
          required
        />
        <input
          type="text"
          name="City"
          value={form.City}
          onChange={handleChange}
          placeholder="ქალაქი *"
          required
        />
        <input
          type="text"
          name="Address"
          value={form.Address}
          onChange={handleChange}
          placeholder="მისამართი *"
          required
        />
      </form>
    </div>
  );
};

export default MessageForm;
