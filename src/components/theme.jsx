import FormPage from './Form'
import '../App.css'

function Theme() {

    const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    padding: '20px',
    borderRadius: '0px 10px 10px 0px',
    height:'35rem',
  };
  const textCard ={
    borderRadius: '10px 0px 0px 10px',
  }

    return(
        <div> 
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="row">
                    <div 
                    className="col-md-6 text-dark bg-white d-flex justify-content-center align-items-center" 
                    style={textCard}>
                        <p className='text-dark'>
                        <h3 className='h3 mb-4'>Welcome</h3>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis exercitationem corrupti fuga, veniam unde ullam, excepturi reprehenderit dolorum id odio est quasi consectetur sit nemo! Corrupti earum totam provident nisi.
                        </p>
                    </div>
                    <div 
                    className="col-md-6 col-sm-12 text-black d-flex justify-content-center align-items-center"
                    style={formStyle}>
                        <FormPage/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theme;