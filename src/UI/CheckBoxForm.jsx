export function CheckBox({}){
    return (
        <label className="w-full mt-2.5 flex items-center align-middle
            xs:mt-2.5
            2xs:mt-2.5
            sm:mt-3.5
            2sm:mt-3.5
            md:mt-3.5
            2md:mt-3.5">
            
            <input className="accent-quaternary appearance-none align-middle checked:bg-quinary cursor-pointer rounded-full
                xs:w-4 xs:h-4 xs:border-2
                2xs:w-4 2xs:h-4 2xs:border-2

                sm:w-5 sm:h-5 sm:border-2
                2sm:w-6 2sm:h-6 2sm:border-2
                3sm:w-6 3sm:h-6 3sm:border-2

                md:w-5 md:h-5 md:border-2
                2md:w-5 2md:h-5 2md:border-2
                3md:w-6 3md:h-6 3md:border-2"
                type="checkbox" 
            />

            <span className="px-1.5 leading-none cursor-pointer
                xs:text-base
                2xs:text-base

                sm:text-lg
                2sm:text-xl
                3sm:text-xl

                md:text-xl
                2md:text-xl
                3md:text-xl">Show Password
            </span>

        </label>
    );
};

export default CheckBox;