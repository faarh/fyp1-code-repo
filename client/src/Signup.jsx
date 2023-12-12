import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:3001/users', { name, email, password })
      .then(result => {console.log(result)
      navigate('/login')
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-light p-4 rounded w-50 shadow-lg">
        <h2 className="mb-4 text-center text-purple font-weight-bold">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-purple font-weight-bold">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-pill"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-purple font-weight-bold">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-pill"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-purple font-weight-bold">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-pill"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-pill">
            Register
          </button>
        </form>
        <p className="mt-3 text-center text-purple font-weight-bold">Already Have an Account</p>
        <Link to="/login" className="btn btn-outline-primary w-100 rounded-pill text-decoration-none text-purple font-weight-bold">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
