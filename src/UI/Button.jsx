export function Button({ label }) {
    return (

      <section className="w-full my-2.5
        xs:px-10
        2xs:px-10

        sm:px-20 sm:my-3.5
        2sm:px-15 2sm:my-3.5
        3sm:px-20 3sm:my-3.5

        md:px-20 md:my-3.5
        2md:px-25 2md:my-3.5">
        <button className="bg-quaternary text-white w-full font-medium
          xs:py-2 xs:text-lg
          2xs:py-3 2xs:text-xl

          sm:py-3.5 sm:text-xl
          2sm:py-2.5 2sm:text-xl
          3sm:py-2.5 3sm:text-xl

          md:py-2.5 md:text-xl
          2md:py-1.5 2md:text-2xl
          3md:py-1.5 3md:text-2xl
          
          
          focus:bg-quinary cursor-pointer">
          {label}
        </button>
      </section>

    );
};

export default Button;