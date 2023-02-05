import React, {useState} from 'react'


// Components
import Navbar from '../../components/Navbar'

const Index = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    show_gender: false,
    gender_identity:'man',
    gender_interest: 'woman',
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const [firstName, setFirstName] = useState("")


  const handleSubmit = () => {

  }

  const handleChange = (e) => {
    console.log('e', e)

    // get value from input fields and checked property from checkboxes
    // const value = e.target.value
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    
    const name = e.target.name
    console.log('value: ' + value, 'name: ' + name)

    setFormData((prevState) =>({
      ...prevState,
      [name] : value
    }))
  }

  return (
    <>
      <Navbar
        minimal={true} 
        showModal={false} 
        setShowModal={() => {}} 
        // setIsSignUp={false}
      />
      <div className='onboarding'>
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor='first_name'>First Name</label>
            <input
              id='first_name'
              type='text'
              name='first_name' 
              placeholder='First Name'
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label htmlFor='dob_day'>Birthday</label>
            <div className='multiple-input-container'>
              <input
                id='dob_day'
                type='number'
                name='dob_day' 
                placeholder='DD'
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                id='dob_month'
                type='number'
                name='dob_month' 
                placeholder='MM'
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                id='dob_year'
                type='number'
                name='dob_year' 
                placeholder='YYYY'
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className='multiple-input-container'>

              <input
                id='man-gender'
                type='radio'
                name='gender' 
                required={true}
                value='man'
                onChange={handleChange}
                // checked={false}
              />
              <label htmlFor='man-gender'>Male</label>

              <input
                id='woman-gender'
                type='radio'
                name='gender' 
                required={true}
                value='woman'
                onChange={handleChange}
                // checked={false}
              />
              <label htmlFor='woman-gender'>Female</label>

            </div>

            <label htmlFor='show-gender'>Show gender on my profile</label>
            <input
                id='show-gender'
                type='checkbox'
                name='show_gender' 
                required={true}
                onChange={handleChange}
                // checked={false}
              />


              <label>Show Me</label>
              <div className='multiple-input-container'>
                <input
                  id='woman-gender-interest'
                  type='radio'
                  name='gender-interest' 
                  required={true}
                  value='women'
                  onChange={handleChange}
                  // checked={false}
                />
                <label htmlFor='woman-gender-interest'>Women</label>

                <input
                  id='man-gender-interest'
                  type='radio'
                  name='gender-interest' 
                  required={true}
                  value='men'
                  onChange={handleChange}
                  // checked={false}
                />
                <label htmlFor='man-gender-interest'>Men</label>

                <input
                  id='everyone-gender-interest'
                  type='radio'
                  name='gender-interest' 
                  required={true}
                  value='everyone'
                  onChange={handleChange}
                  // checked={false}
                />
                <label htmlFor='everyone-gender-interest'>Everyone</label>

              </div>

              <label htmlFor='about'>About</label>
              <input
                id="about"
                type="text"
                name="about"
                required={true}
                placeholder="I like long walks.."
                value={formData.about}
                onChange={handleChange}
              />

              <input
                type="submit"
              />
          </section>



          


          <section>
            <label htmlFor='url'>Profile Picture</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />

            <div className='photo-container'>
              <img
                src={formData.url}
                alt="profile pic preview"
              />
            </div>
          </section>
        </form>
      </div>
    </>
  )
}

export default Index