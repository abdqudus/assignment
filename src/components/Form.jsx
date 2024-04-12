
const Form = ({ children }) => {

  return (
    <form className="mt-8 md:max-w-[557px]">
      <div className={`h-[50px] relative px-4 flex items-center gap-2  focus-within:border-[#5378F6] rounded-[6px] border dark:bg-[#242428]  transition-[border] bg-[#F3F7FE] dark:border-[#242428] border-[#D4DCF1]`}>

        <label htmlFor="search">
          <img src="/search.png" alt="" />
        </label>

        {children}
      </div>
      <button className="w-[146px] focus:bg-[#2952CC]  active:bg-[#061E66] transition-[background-color] hover:bg-[#2952CC] bg-[#3366FF] min-h-[50px] font-medium  text-white text-[1rem] mt-5 rounded-[6px]" type="button">SEARCH</button>
    </form>
  )
}
export default Form

