export function AForm({label, href}){
    return(

        <section>
            <a className="text-quaternary
                xs:text-sm
                2xs:text-base

                sm:text-xl
                2sm:text-xl
                3sm:text-xl

                md:text-xl
                2md:text-xl
                3md:text-xl" 
                
                href="">{label}</a>
        </section>

    );
};

export default AForm;