export function PForm({label, label2}){
    
    return(
        <p className="text-quaternary font-medium
            xs:text-3xl
            2xs:text-3xl

            sm:text-3xl
            2sm:text-3xl
            3sm:text-4xl

            md:text-4xl
            2md:text-4xl
            3md:text-4xl">{label}
            <span className="text-black
                ">{label2}</span>
        </p>
    );
};

export default PForm;