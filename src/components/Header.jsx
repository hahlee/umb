const Header = () => {
  return (
    <div className="header d-flex p-4 p-md-5 align-items-baseline align-items-md-center justify-content-between text-white">
        <a href="https://healthcare.utah.edu/" target="_blank" rel="noreferrer">
            <img src="https://healthcare.utah.edu/themes/custom/theme_uou_clinical/logo.svg" 
                className="logo uhealth img-fluid"
                alt="UHealth logo" 
            />
        </a>
        <h6 className="ps-3 mb-0 text-light">CPT Database</h6>
    </div>
  )
}

export default Header