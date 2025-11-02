export function SectionForm({placeholder, type}) {
    return (
    <section className="flex flex-col w-full text-black">

      <input
        type={type}
        placeholder={placeholder}
        className="outline-none border-0 border-quaternary text-black font-medium
          xs:border-b-2 xs:text-2xl xs:py-2
          2xs:border-b-2 2xs:text-2xl 2xs:py-2"
      />

    </section>
    );
}

export default SectionForm;