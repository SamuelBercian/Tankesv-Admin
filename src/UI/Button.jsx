export function Button({ label }) {
    return (

      <section className="w-full my-2.5
        xs:px-10
        2xs:px-10">
        <button className="bg-quaternary text-white w-full font-medium
          xs:py-2 xs:text-lg
          2xs:py-3 2xs:text-xl
          
          
          
          focus:bg-quinary cursor-pointer">
          {label}
        </button>
      </section>

    );
};

export default Button;