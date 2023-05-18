const Header = () => {
  return (
    <div className="header p-4 p-md-5">
        <a href="https://healthcare.utah.edu/" target="_blank" rel="noreferrer">
            <img src="https://healthcare.utah.edu/themes/custom/theme_uou_clinical/logo.svg" 
                className="logo uhealth img-fluid"
                alt="UHealth logo" 
            />
        </a>
        <h5 className="ps-3 text-light">CPT Database</h5>
    </div>
  )
}

export default Header