export function PForm({label, label2}){
    
    return(
        <p className="text-quaternary font-medium
            xs:text-3xl
            2xs:text-3xl">{label} 
            <span className="text-black
                ">{label2}</span>
        </p>
    );
};

export default PForm;