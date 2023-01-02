const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center font-bold uppercase p-3 mb-5 rounded-md'>
        {children}
    </div> 
  )
}

export default Error