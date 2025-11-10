export function SectionForm({ placeholder, type, name, value, onChange }) {
  return (
    <section className="flex flex-col w-full text-black">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none border-0 border-quaternary text-black font-medium
          xs:border-b-2 xs:text-2xl xs:py-2
          2xs:border-b-2 2xs:text-2xl 2xs:py-2
          sm:border-b-2 sm:text-2xl sm:py-3
          2sm:border-b-2 2sm:text-2xl 2sm:py-2.5
          3sm:border-b-2 3sm:text-2xl 3sm:py-3.5
          md:border-b-2 md:text-xl md:py-2.5
          2md:border-b-2 2md:text-2xl 2md:py-2.5
          3md:border-b-2 3md:text-2xl 3md:py-2.5"
      />
    </section>
  );
}

export default SectionForm;
