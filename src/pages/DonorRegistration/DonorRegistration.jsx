import { useState } from "react";
import "./DonorRegistration.css";

const DonorRegistration = () => {

};

export default DonorRegistration;

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  bloodGroup: "",
  age: "",
  city: "",
});