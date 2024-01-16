import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

const Form = () => {
  const [isLoading, setIsLoading ] = useState(false);

  const [form, setForm ] = useState({
    name: '',
    Position: '',
    LinkedIn: '',
    Instagram: '',
    Year: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='mx-6 my-4'>
      <h2 className='text-2xl text-center mb-6'>Members <span className=' text-violet'>Form</span></h2>
      <form className='flex flex-col max-w-[600px] m-auto gap-4 text-mainBg'>
        
        <input 
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}
        type="text" 
        placeholder='Your Name'
        className='py-2 px-4 rounded-lg outline-none w-full'
        />

        <input 
        value={form.LinkedIn}
        onChange={(e) => setForm({...form, LinkedIn: e.target.value})}
        type="text" 
        placeholder='LinkedIn Link'
        className='py-2 px-4 rounded-lg outline-none w-full'
        />

        <input 
        value={form.Instagram}
        onChange={(e) => setForm({...form, Instagram: e.target.value})}
        type="text" 
        placeholder='Instagram Link'
        className='py-2 px-4 rounded-lg outline-none w-full'
        />

        <input 
        list='positions'
        value={form.Position}
        onChange={(e) => setForm({...form, Position: e.target.value})}
        type="text" 
        placeholder='Position'
        className='py-2 px-4 rounded-lg outline-none w-full'
        />
        <datalist id='positions'>
          <option value="Final Year Member" />
          <option value="Coordinator" />
          <option value="Executive Member" />
          <option value="First Year" />
        </datalist>

        <input 
        list='year'
        value={form.Year}
        onChange={(e) => setForm({...form, Year: e.target.value})}
        type="text"
        placeholder='Year'
        className='py-2 px-4 rounded-lg outline-none w-full'
        />
        <datalist id='year'>
            <option value="Final Year" />
            <option value="Third Year" />
            <option value="Second Year" />
            <option value="First Year" />
        </datalist>

        <button className='py-2 text-mainText bg-violet rounded-lg text-xl' onClick={(e) => onSubmit(e)}>
          {isLoading 
          ? <TailSpin /> 
          : 'SUBMIT'
          }
          </button>

      </form>
        
    </div>
  )
}

export default Form
