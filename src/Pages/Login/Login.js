import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn,googleLogin,githubLogin} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathName || '/';

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () =>{
    googleLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch(err => console.error(err));
  }
  const handleGithubSignIn = ()=>{
      githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        
      })
      .catch(err => console.error(err))
  }

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    signIn(email,password)
    .then(result => {
      const user = result.user;
      const currentUser ={
        email:user.email
      }
      console.log(currentUser)
     
      // get jwt token
      fetch('https://picture-perfect-server.vercel.app/jwt',{
        method:'POST',
        headers:{
        'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('photo-token',data.token)
      navigate(from,{replace:true});

      })
      form.reset()
    })
    .catch(err => console.error(err.message))

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold py-6">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="flex justify-center my-4 text-xl cursor-pointer">
               <button onClick={handleGoogleSignIn}><FaGoogle className="mr-3"></FaGoogle></button>
               <button onClick={handleGithubSignIn}><FaGithub></FaGithub></button>
              </div>
            <p className="text-center">New to Paradise? <Link className="text-primary font-bold" to='/signup'>sign up</Link> </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
