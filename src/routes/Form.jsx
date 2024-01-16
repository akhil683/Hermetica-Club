import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';4
import { addDoc } from 'firebase/firestore';
import { membersRef } from '../utils/firebase.utils';

const Form = () => {
  const [isLoading, setIsLoading ] = useState(false);
  const [form, setForm ] = useState({
    name: '',
    Position: '',
    LinkedIn: '',
    Instagram: '',
  })
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await addDoc(membersRef, form);

      setIsLoading(false);

    } catch (e) {
      alert("Error, Please try again");
      console.log(e.message);
    }
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

        <select 
          className='py-2 px-4 rounded-lg w-full' 
          onChange={(e) => setForm({...form, Position: e.target.value})}
        >
          <option value="Your Position">Your Position</option>
          <option value="Final Year Member">Final Year Member</option>
          <option value="Coordinator" >Coordinator</option>
          <option value="Executive Member" >Executive Member</option>
          <option value="First Year">Volunteer</option>
        </select>

        <button className='py-2 mt-2 text-mainText bg-violet rounded-lg text-xl' onClick={(e) => onSubmit(e)}>
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
