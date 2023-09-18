import GoogleLogo from './img/google.png'
import GithubLogo from './img/github.png'
import FacebookLogo from './img/facebook.png'

function Form() {
    return(
    <div className="container">
<h1 className="h1 mb-4">Log İn</h1>
<form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label text-bold">Username:</label>
    <input
      type="text"
      className="form-control bg-transparent border-dark"
      id="name"
      name="name"
    />
  </div>
  <div className="mb-3">
    <div className="row">
      <div className="col-md-6"><label htmlFor="pass" className="form-label">Password:</label></div>
      <div className="col-md-6 text-end"><label className=''>Forgot Your <a href="#"> Password?</a></label></div>
    </div>
    <input
      type="password"
      className="form-control bg-transparent border-dark"
      id="password"
      name="password"
    />
  </div>
  <button type="submit" className="btn btn-primary w-100">Log İn</button>
  <div className="row">
      <div className="col-md-4 col-sm-12 mt-2">
      <button type="submit" className="btn bg-white w-100 h-100 mt-2"><img src={GoogleLogo} alt="" className='w-25 img-fluid' /></button>
      </div>
      <div className="col-md-4 col-sm-12 mt-2">
  <button type="submit" className="btn bg-white w-100 h-100 mt-2"><img src={GithubLogo} alt="" className='w-25 img-fluid' /></button>
  </div>
      <div className="col-md-4 col-sm-12 mt-2">
  <button type="submit" className="btn bg-white w-100 h-100 mt-2 "><img src={FacebookLogo} alt="" className='w-25 img-fluid' /></button>
      </div>
  </div>
</form>
</div>
    )
}

export default Form;